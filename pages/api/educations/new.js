import connectDB from "../../lib/connectDB"; // Veritabanı bağlantısı
import Education from "../../../models/Education"; // Education modelini içe aktar

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, link, platform } = req.body;

    // Form doğrulaması
    if (!title || !link || !platform) {
      return res.status(400).json({ message: "Lütfen tüm alanları doldurun!" });
    }

    try {
      // Veritabanına bağlan
      await connectDB();

      // Yeni eğitim kaydını oluştur
      const newEducation = new Education({
        title,
        link,
        platform,
      });

      // Eğitim kaydını veritabanına kaydet
      await newEducation.save();

      // Başarı mesajı döndür
      return res.status(201).json({ message: "Eğitim başarıyla eklendi!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Sunucuda bir hata oluştu!" });
    }
  } else {
    // Yalnızca POST isteği kabul edilir
    return res
      .status(405)
      .json({ message: "Yalnızca POST isteği kabul edilir" });
  }
}
