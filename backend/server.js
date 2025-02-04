import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes.js"; // 🔹 Assure-toi du bon chemin

dotenv.config();
const app = express();

// ✅ Middleware pour lire le JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Utilisation des routes
app.use("/api", emailRoutes); 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Serveur backend sur port ${PORT}`));




