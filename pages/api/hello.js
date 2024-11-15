import connectDB from "../lib/connectDB";

export default async function handler(req, res) {
  try {
    // Veritabanına bağlanmayı dene
    await connectDB(); // Bağlantıyı sağla

    // Eğer bağlantı başarılıysa, başarı mesajı döndür
    res.status(200).json({ message: "Veritabanına başarıyla bağlanıldı!" });
  } catch (error) {
    // Bağlantı hatası durumunda hata mesajı döndür
    res.status(500).json({
      message: "Veritabanına bağlanırken hata oluştu.",
      error: error.message,
    });
  }
}
