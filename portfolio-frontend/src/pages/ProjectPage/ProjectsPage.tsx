import React from "react";
import projects from "../../assets/projects.json";
import ProjectSearchBar from "../../components/ProjectSearchBar";

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col mt-20 md:mt-20 space-y-5 projects-page-height bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      <div className="nav-max mx-auto">
        <p className="flex justify-center items-center text-center m-5 p-2 md:mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Just type anything. Who knows what you might find? 🤔
        </p>
        {projects.length > 0 ? (
          <ProjectSearchBar dataToFilter={projects} />
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
