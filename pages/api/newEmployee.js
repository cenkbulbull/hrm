import connectDB from "../lib/connectDB";
import Employee from "../../models/employee";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullname, email, password } = req.body;

    // Basit form doğrulaması
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "Lütfen tüm alanları doldurun!" });
    }

    try {
      // Veritabanına bağlan
      await connectDB();

      // Kullanıcıyı kontrol et, aynı email'e sahip bir kullanıcı var mı?
      const existingUser = await Employee.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Bu email zaten kullanılıyor!" });
      }

      // Şifreyi hash'le
      const hashedPassword = await bcrypt.hash(password, 10);

      // Yeni kullanıcıyı oluştur
      const newEmployee = new Employee({
        fullname,
        email,
        password: hashedPassword, // Hashlenmiş şifreyi kaydediyoruz
        tel: "", // İsteğe bağlı alan boş bırakılabilir
        department: "", // İsteğe bağlı alan boş bırakılabilir
        title: "", // İsteğe bağlı alan boş bırakılabilir
        startDate: new Date(), // Varsayılan değer olarak yeni bir tarih
        salary: "", // İsteğe bağlı alan boş bırakılabilir
        workSchedule: {}, // Boş nesne olarak gönderiyoruz
        todolist: [], // Boş bir dizi olarak gönderiyoruz
        educations: [], // Boş bir dizi olarak gönderiyoruz
      });

      // Yeni kullanıcıyı kaydet
      await newEmployee.save();

      return res
        .status(201)
        .json({ message: "Kullanıcı başarıyla oluşturuldu!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Sunucuda bir hata oluştu!" });
    }
  } else {
    // Sadece POST isteği kabul ediliyor
    return res
      .status(405)
      .json({ message: "Yalnızca POST isteği kabul edilir" });
  }
}
