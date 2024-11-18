import connectDB from "../lib/connectDB";
import Employee from "../../models/employee";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // JWT secret key

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Basit form doğrulaması
    if (!email || !password) {
      return res.status(400).json({ message: "Lütfen tüm alanları doldurun!" });
    }

    try {
      // Veritabanına bağlan
      await connectDB();

      // Kullanıcıyı kontrol et, aynı email'e sahip bir kullanıcı var mı?
      const existingUser = await Employee.findOne({ email });
      if (!existingUser) {
        return res
          .status(404)
          .json({ message: "Böyle bir kullanıcı bulunamadı!" });
      }

      // Şifreyi doğrula
      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Şifre yanlış!" });
      }

      // Kullanıcıyı doğruladıktan sonra JWT token oluştur
      const token = jwt.sign(
        { id: existingUser._id, email: existingUser.email },
        JWT_SECRET,
        { expiresIn: "1h" } // Token 1 saat geçerli olacak
      );

      // Token'ı ve kullanıcı bilgisini döndür
      return res.status(200).json({
        message: "Giriş başarılı!",
        token, // Kullanıcıya token'ı veriyoruz
        user: {
          fullname: existingUser.fullname,
          email: existingUser.email,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Sunucuda bir hata oluştu!" });
    }
  } else {
    return res
      .status(405)
      .json({ message: "Yalnızca POST isteği kabul edilir" });
  }
}
