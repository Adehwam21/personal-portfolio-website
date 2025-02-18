import cors from "cors";
import bodyParser from "body-parser";

const frontEndUrl = process.env.FRONTEND_URL || "http://localhost:5173";

export const corsMiddleware = cors({
  origin: [
    "http://localhost:3000",
    "http://192.168.43.49:3000",
    "https://aaronkudadjie.vercel.app",
    "http://localhost:5173",
    frontEndUrl,
  ],
});

export const urlencodedMiddleware = bodyParser.urlencoded({ extended: false });
export const jsonMiddleware = bodyParser.json();

