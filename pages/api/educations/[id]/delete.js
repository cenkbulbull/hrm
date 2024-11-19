import connectDB from "../../../lib/connectDB";
import Education from "../../../../models/education"; // Eğitim modelinizin yolu
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query; // URL'den gelen eğitim ID'si

  if (method === "DELETE") {
    try {
      // Authorization Header'dan token'ı al
      const token = req.headers.authorization?.split(" ")[1];

      // Token kontrolü
      if (!token) {
        return res
          .status(401)
          .json({ message: "Authorization token is missing" });
      }

      // Token doğrulama
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);

      await connectDB(); // Veritabanına bağlan

      // Eğitim ID'sine göre veriyi sil
      const deletedEducation = await Education.findByIdAndDelete(id);

      // Eğer eğitim bulunamazsa
      if (!deletedEducation) {
        return res.status(404).json({ message: "Eğitim bulunamadı." });
      }

      // Eğitim başarıyla silindi
      return res.status(200).json({
        success: true,
        message: "Eğitim başarıyla silindi.",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Eğitim silinirken bir hata oluştu.",
        error: error.message,
      });
    }
  } else {
    // Sadece DELETE isteği kabul edilir
    return res.status(405).json({
      message: "Method Not Allowed. Sadece DELETE isteği kabul edilir.",
    });
  }
}
