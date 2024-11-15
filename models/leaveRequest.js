import mongoose from "mongoose";

// Leave Request Schema
const leaveRequestSchema = new mongoose.Schema(
  {
    employeeID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee", // Çalışanla ilişkilendirmek için 'Employee' modeline referans
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    }, // İzin başlangıç tarihi
    endDate: {
      type: Date,
      required: true,
    }, // İzin bitiş tarihi
    numberOfDays: {
      type: Number,
      required: true,
    }, // İzin gün sayısı
    status: {
      type: Boolean,
      default: false,
    }, // İzin durumu (false = beklemede, true = onaylı, false = reddedildi)
  },
  {
    timestamps: true, // createdAt ve updatedAt alanları otomatik eklenir
  }
);

// LeaveRequest Model
export default mongoose.models.LeaveRequest ||
  mongoose.model("LeaveRequest", leaveRequestSchema);
