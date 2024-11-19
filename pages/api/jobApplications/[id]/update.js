import connectDB from "../../../lib/connectDB"; // MongoDB bağlantısı
import JobApplication from "../../../../models/jobApplication.js"; // Mongoose model

// PUT veya PATCH yöntemiyle başvuruyu güncelleyen handler
export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query; // URL'den gelen başvuru ID'si

  // Yalnızca 'POST' veya 'PATCH' isteklerini kabul ediyoruz
  if (method === "POST" || method === "PATCH") {
    const { status } = req.body; // Body'den gelen yeni durum

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status field is required.",
      });
    }

    try {
      // Veritabanına bağlan
      await connectDB();

      // Başvuru ID'sine göre veriyi bul ve güncelle
      const updatedApplication = await JobApplication.findByIdAndUpdate(
        id,
        { status },
        { new: true } // Güncellenen başvuruyu döndürmek için
      );

      if (!updatedApplication) {
        return res.status(404).json({
          success: false,
          message: "Job application not found.",
        });
      }

      // Başvuruyu başarıyla güncelledik
      return res.status(200).json({
        success: true,
        data: updatedApplication,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Error updating job application.",
      });
    }
  } else {
    // Yalnızca POST veya PATCH isteklerine izin verilir
    return res.status(405).json({
      success: false,
      message: "Method not allowed. Only POST and PATCH are accepted.",
    });
  }
}
