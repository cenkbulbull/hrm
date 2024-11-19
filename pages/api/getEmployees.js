import connectDB from "../lib/connectDB";
import Employee from "../../models/employee";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Token'ı başlıkta al
      const token = req.headers.authorization?.split(" ")[1]; // 'Bearer <token>' formatında token alıyoruz

      // Eğer token yoksa, 401 döndür
      if (!token) {
        return res
          .status(401)
          .json({ message: "Authorization token is missing" });
      }

      // Token'ı doğrulama
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // JWT_SECRET, .env dosyasından alınır

      console.log(decoded); // Token'ın decode edilmiş verilerini görmek için

      await connectDB(); // Veritabanına bağlan

      // Tüm çalışanları veritabanından çek
      const employees = await Employee.find(); // Tüm çalışanları alır

      // Eğer çalışan bulunamazsa, 404 döndür
      if (employees.length === 0) {
        return res.status(404).json({ message: "Çalışan bulunamadı." });
      }

      // Başarılı olursa çalışanları döndür
      res.status(200).json({ employees });
    } catch (error) {
      console.error("Hata Detayı:", error); // Detaylı hata mesajını yazdırın
      res.status(500).json({
        message: "Veritabanına bağlanırken veya verileri çekerken hata oluştu.",
        error: error.message,
      });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
