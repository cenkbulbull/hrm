import mongoose from "mongoose";

// Work Schedule Schema (Her gün için start ve end alanları)
const workScheduleSchema = new mongoose.Schema(
  {
    monday: {
      start: { type: String, required: false, default: "" }, // Pazartesi başlangıç saati
      end: { type: String, required: false, default: "" }, // Pazartesi bitiş saati
    },
    tuesday: {
      start: { type: String, required: false, default: "" }, // Salı başlangıç saati
      end: { type: String, required: false, default: "" }, // Salı bitiş saati
    },
    wednesday: {
      start: { type: String, required: false, default: "" }, // Çarşamba başlangıç saati
      end: { type: String, required: false, default: "" }, // Çarşamba bitiş saati
    },
    thursday: {
      start: { type: String, required: false, default: "" }, // Perşembe başlangıç saati
      end: { type: String, required: false, default: "" }, // Perşembe bitiş saati
    },
    friday: {
      start: { type: String, required: false, default: "" }, // Cuma başlangıç saati
      end: { type: String, required: false, default: "" }, // Cuma bitiş saati
    },
    saturday: {
      start: { type: String, required: false, default: "" }, // Cumartesi başlangıç saati
      end: { type: String, required: false, default: "" }, // Cumartesi bitiş saati
    },
    sunday: {
      start: { type: String, required: false, default: "" }, // Pazar başlangıç saati
      end: { type: String, required: false, default: "" }, // Pazar bitiş saati
    },
  },
  { _id: false } // _id'yi devre dışı bırakıyoruz çünkü bu nesne, ana kullanıcının altında bir alan olarak olacak
);

// Todo List Schema (Yapılacaklar Listesi)
const todoListSchema = new mongoose.Schema({
  task: { type: String, required: false },
  date: { type: Date, required: false },
  time: { type: String, required: false },
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
    password: { type: String, required: true },
    tel: { type: String, required: false, default: "" },
    department: { type: String, required: false, default: "" },
    title: { type: String, required: false, default: "" },
    startDate: { type: Date, required: false, default: Date.now }, // Varsayılan olarak şu anki tarihi ekleyelim
    salary: { type: String, required: false, default: "" },
    workSchedule: { type: workScheduleSchema, required: false, default: {} },
    todolist: { type: [todoListSchema], required: false, default: [] },
    educations: { type: [educationSchema], required: false, default: [] },
  },
  {
    timestamps: true, // createdAt ve updatedAt otomatik olarak eklenecek
  }
);

export default mongoose.models.Employee ||
  mongoose.model("Employee", employeeSchema);
