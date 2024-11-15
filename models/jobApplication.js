import mongoose from "mongoose";

// Job Application Schema
const jobApplicationSchema = new mongoose.Schema(
  {
    position: { type: String, required: true }, // Pozisyon adı (örneğin, "Frontend Developer")
    resume: { type: String, required: true }, // Özgeçmiş bağlantısı veya özgeçmiş metni (string)
    email: { type: String, required: true }, // Başvuru yapan kişinin e-posta adresi
    status: { type: Boolean, default: false }, // Başvurunun durumu (false = bekliyor, true = kabul edildi)
  },
  {
    timestamps: true, // createdAt ve updatedAt otomatik olarak eklenir
  }
);

// Job Application Model
export default mongoose.models.JobApplication ||
  mongoose.model("JobApplication", jobApplicationSchema);
