import { fetchAllProjects } from "../services/projectService.js";

export const getAllProjects = async (req, res) => {
    try {
        const projects = await fetchAllProjects();
        res.status(200).json({message: "Found some projects!", data: projects});

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "An error occured on the server"})
    }
}