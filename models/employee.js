import mongoose from "mongoose";

// Work Schedule Schema (Her gün için start ve end alanları)
const workScheduleSchema = new mongoose.Schema(
  {
    monday: {
      start: { type: String, required: true }, // Pazartesi başlangıç saati
      end: { type: String, required: true }, // Pazartesi bitiş saati
    },
    tuesday: {
      start: { type: String, required: true }, // Salı başlangıç saati
      end: { type: String, required: true }, // Salı bitiş saati
    },
    wednesday: {
      start: { type: String, required: true }, // Çarşamba başlangıç saati
      end: { type: String, required: true }, // Çarşamba bitiş saati
    },
    thursday: {
      start: { type: String, required: true }, // Perşembe başlangıç saati
      end: { type: String, required: true }, // Perşembe bitiş saati
    },
    friday: {
      start: { type: String, required: true }, // Cuma başlangıç saati
      end: { type: String, required: true }, // Cuma bitiş saati
    },
    saturday: {
      start: { type: String, required: true }, // Cumartesi başlangıç saati
      end: { type: String, required: true }, // Cumartesi bitiş saati
    },
    sunday: {
      start: { type: String, required: true }, // Pazar başlangıç saati
      end: { type: String, required: true }, // Pazar bitiş saati
    },
  },
  { _id: false } // _id'yi devre dışı bırakıyoruz çünkü bu nesne, ana kullanıcının altında bir alan olarak olacak
);

// Todo List Schema (Yapılacaklar Listesi)
const todoListSchema = new mongoose.Schema({
  task: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: Boolean, default: false },
});

// Education Schema - sadece ID referansı
const educationSchema = new mongoose.Schema(
  {
    // Education id sadece referans olacak
    educationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Education",
      required: true,
    },
  },
  { _id: false } // Education nesnesi için _id'yi devre dışı bırakıyoruz
);

// Kullanıcı Modeli
const employeeSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Şifreyi hash ile sakla
    tel: { type: String, required: true },
    department: { type: String, required: true },
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    salary: { type: String, required: true },
    workSchedule: workScheduleSchema,
    todoList: [todoListSchema],
    educations: [educationSchema],
  },
  {
    timestamps: true, // createdAt ve updatedAt otomatik olarak eklenecek
  }
);

export default mongoose.models.Employee ||
  mongoose.model("Employee", employeeSchema);
