import React from "react";
import ProjectSearchBar from "../../components/ProjectSearchBar";
import projects from "../../assets/projects.json";
import Footer from "../../components/Footer";
import ScrollToTopBtn from "../../components/ScrollToTop";

const ProjectsPage: React.FC = () => {

    return (
        <div className="flex flex-col min-h-screen mt-20 md:mt-20 space-y-5 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
            <p className="flex justify-center items-center text-center m-5 p-2 md:mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Just type anything. Who knows what you might find? 🤔
            </p>
            {projects.length > 0 ? (
                <ProjectSearchBar dataToFilter={projects} />
            ) : (
                <p>Loading projects...</p>
            )}
            <Footer/>
            <ScrollToTopBtn/>
        </div>
    );
};

export default ProjectsPage;
