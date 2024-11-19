import connectDB from "../../../lib/connectDB"; // MongoDB bağlantısı
import Employee from "../../../../models/employee"; // Employee modelini içe aktar

// GET işlemi ile Employee verisini almak
export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query; // URL'den gelen employee ID'si

  if (method === "GET") {
    try {
      // Veritabanına bağlan
      await connectDB();

      // Çalışan verisini ID'ye göre bul
      const employee = await Employee.findById(id);

      // Eğer çalışan bulunamazsa
      if (!employee) {
        return res.status(404).json({
          success: false,
          message: "Çalışan bulunamadı.",
        });
      }

      // Başarılı olursa çalışan verisini döndür
      return res.status(200).json({
        success: true,
        message: "Çalışan verisi başarıyla alındı.",
        data: employee,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Çalışan verileri alınırken bir hata oluştu.",
        error: error.message,
      });
    }
  } else {
    // Yalnızca GET isteği kabul edilir
    return res.status(405).json({
      success: false,
      message: "Yalnızca GET isteği kabul edilir.",
    });
  }
}
