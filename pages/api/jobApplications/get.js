import connectDB from "../../lib/connectDB"; // MongoDB bağlantısını sağlayan helper
import JobApplication from "../../../models/jobApplication"; // Mongoose model
import jwt from "jsonwebtoken"; // JWT doğrulama için kullanacağız

// Giriş yapıldığını kontrol etmek için yardımcı fonksiyon
const authenticate = (req) => {
  const token = req.headers.authorization?.split(" ")[1]; // Authorization: Bearer <token> şeklinde bekliyoruz

  if (!token) {
    throw new Error("Token bulunamadı. Lütfen giriş yapın.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Secret key ile token'ı doğrula
    return decoded; // Token doğrulandıysa kullanıcı bilgilerini döner
  } catch (error) {
    throw new Error("Geçersiz token. Lütfen tekrar giriş yapın.");
  }
};

// GET işlemi için handler
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Kullanıcıyı doğrulama
      authenticate(req); // Eğer token geçersizse, hata fırlatılır

      // Veritabanına bağlan
      await connectDB();

      // JobApplications koleksiyonundan tüm başvuruları al
      const jobApplications = await JobApplication.find({});

      // Başvurular başarılı şekilde alındıysa
      return res.status(200).json({
        success: true,
        data: jobApplications,
      });
    } catch (error) {
      // Hata durumunda, giriş yapılmadığı için Unauthorized (401) hatası döndür
      if (
        error.message === "Token bulunamadı. Lütfen giriş yapın." ||
        error.message === "Geçersiz token. Lütfen tekrar giriş yapın."
      ) {
        return res.status(401).json({
          success: false,
          message: error.message,
        });
      }
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Veritabanı bağlantısı sırasında bir hata oluştu.",
      });
    }
  } else {
    // Yalnızca GET isteğine izin veriyoruz
    return res.status(405).json({
      success: false,
      message: "Yalnızca GET isteği kabul edilmektedir.",
    });
  }
}
