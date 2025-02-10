import { redisClient } from "../db/redisClient.js";
import { projects } from "../db/projects.js";

export const fetchAllProjects = async () => {
    try {
        const cachedData = await redisClient.get("projects");

        if (cachedData) {
            console.log("✅ Returning Cached Projects");
            return JSON.parse(cachedData);
        }

        console.log("⏳ Fetching Projects from DB and Caching...");
        const data = projects;
        await redisClient.set("projects", JSON.stringify(data), "EX", 30);

        return data;
    } catch (error) {
        console.error("❌ Redis Error:", error);
        return projects;
    }
};
