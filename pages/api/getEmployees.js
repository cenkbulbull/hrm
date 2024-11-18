import connectDB from "../lib/connectDB";
import Employee from "../../models/employee";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Token kontrolü
    const token = req.headers.authorization?.split(" ")[1]; // 'Bearer <token>' formatında token alıyoruz

    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token is missing" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Token'ı doğrulama
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // JWT_SECRET, .env dosyasından alınır

    await connectDB(); // Bağlantıyı sağla

    // Tüm çalışanları veritabanından çek
    const employees = await Employee.find(); // Tüm çalışanları alır

    console.log(employees);

    // Eğer çalışan bulunamazsa, 404 döndür
    if (employees.length === 0) {
      return res.status(404).json({ message: "Çalışan bulunamadı." });
    }

    // Başarılı olursa çalışanları döndür
    res.status(200).json({ employees });
  } catch (error) {
    // Hata durumunda mesaj döndür
    res.status(500).json({
      message: "Veritabanına bağlanırken veya verileri çekerken hata oluştu.",
      error: error.message,
    });
  }
}
