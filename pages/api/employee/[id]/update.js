import connectDB from "../../../lib/connectDB"; // MongoDB bağlantısı
import Employee from "../../../../models/employee"; // Employee modelini içe aktar

// PATCH işlemi ile Employee'nin Todo Listesini güncelleme
export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query; // URL'den gelen employee ID'si

  if (method === "PATCH") {
    try {
      // Veritabanına bağlan
      await connectDB();

      // Gelen veriyi al (req.body)
      const { todolist } = req.body; // Sadece todolist kısmını alıyoruz

      // Çalışan verisini ID'ye göre bul ve yalnızca todolist'i güncelle
      const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        { $push: { todolist: { $each: todolist } } }, // Yeni görevleri mevcut todolist'e ekle
        { new: true, runValidators: true } // Güncellenmiş veriyi döndür ve validasyonları çalıştır
      );

      // Eğer çalışan bulunamazsa
      if (!updatedEmployee) {
        return res.status(404).json({
          success: false,
          message: "Çalışan bulunamadı.",
        });
      }

      // Başarılı olursa güncellenmiş çalışan verisini döndür
      return res.status(200).json({
        success: true,
        message: "Todo listesi başarıyla güncellendi.",
        data: updatedEmployee,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Todo listesi güncellenirken bir hata oluştu.",
        error: error.message,
      });
    }
  } else {
    // Yalnızca PATCH isteği kabul edilir
    return res.status(405).json({
      success: false,
      message: "Yalnızca PATCH isteği kabul edilir.",
    });
  }
}
