import { Redis } from "ioredis";
import dotenv from "dotenv";

dotenv.config();
const redis_url = process.env.REDIS_URL;

export const redisClient = new Redis(redis_url);

redisClient.on("connect", () => {
    console.log("✅ Connected to Redis");
});

redisClient.on("error", (err) => {
    console.error("❌ Redis Client Error:", err);
});
