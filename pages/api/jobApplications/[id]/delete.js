import connectDB from "../../../lib/connectDB"; // MongoDB bağlantısı
import JobApplication from "../../../../models/jobApplication"; // Mongoose model

// DELETE işlemi için handler
export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query; // URL'den gelen başvuru ID'si

  // Yalnızca DELETE isteklerine izin veriyoruz
  if (method === "DELETE") {
    try {
      // Veritabanına bağlan
      await connectDB();

      // Başvuru ID'sine göre veriyi bul ve sil
      const deletedApplication = await JobApplication.findByIdAndDelete(id);

      if (!deletedApplication) {
        return res.status(404).json({
          success: false,
          message: "Job application not found.",
        });
      }

      // Başvuru başarılı şekilde silindi
      return res.status(200).json({
        success: true,
        message: "Job application successfully deleted.",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Error deleting job application.",
      });
    }
  } else {
    // Yalnızca DELETE isteğine izin verilir
    return res.status(405).json({
      success: false,
      message: "Method not allowed. Only DELETE is accepted.",
    });
  }
}
