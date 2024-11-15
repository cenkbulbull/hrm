import mongoose from "mongoose";

// Education Schema - Eğitim bilgileri
const educationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // Eğitim başlığı (Örnek: "Full Stack Development")
    link: { type: String, required: true }, // Eğitimle ilgili bağlantı (Örnek: URL)
    platform: { type: String, required: true }, // Eğitim platformu (Örnek: "Udemy", "Coursera")
  },
  {
    timestamps: true, // createdAt ve updatedAt otomatik olarak eklenecek
  }
);

// Eğitim Modeli
export default mongoose.models.Education ||
  mongoose.model("Education", educationSchema);
