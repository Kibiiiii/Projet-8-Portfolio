import express from "express";
import cors from "cors";  // Import de CORS
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes.js";

dotenv.config();

const app = express();

// ✅ Middleware CORS
app.use(cors({
    origin: "http://localhost:3000",  // Permet seulement l'accès depuis le frontend local (port 3000)
    methods: ["GET", "POST"],  // Méthodes autorisées
    allowedHeaders: ["Content-Type"],  // En-têtes autorisés
}));

// ✅ Middleware pour lire le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Utilisation des routes
app.use("/api", emailRoutes); 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Serveur backend sur port ${PORT}`));