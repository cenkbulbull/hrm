import connectDB from "../../lib/connectDB";
import Education from "../../../models/Education";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Veritabanına bağlan
      await connectDB();

      // Eğitimleri al
      const educations = await Education.find();

      // Eğitimleri döndür
      return res.status(200).json(educations);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Sunucuda bir hata oluştu!" });
    }
  } else {
    return res
      .status(405)
      .json({ message: "Yalnızca GET isteği kabul edilir" });
  }
}
