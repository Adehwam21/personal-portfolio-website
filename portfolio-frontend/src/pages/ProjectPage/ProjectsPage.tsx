import React from "react";
import projects from "../../assets/projects.json";
import ProjectSearchBar from "../../components/ProjectSearchBar";
import AnimatedSection from "../../components/Animator";

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col mt-20 md:mt-20 space-y-5 projects-page-height bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">

      <div className="nav-max mx-auto px-4">
        {/* Welcome Message */}
        <AnimatedSection>
          <div className="text-center mt-8 pt-3 mb-10">
            <h1 className="font-scode p-3 text-2xl md:text-5xl font-extrabold tracking-tight leading-snug text-gray-800 dark:text-gray-100">
              EXPLORE MY PROJECTS 
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Dive into a collection of my work. Just type anything-who knows what you might find? 🤔
            </p>
          </div>
        </AnimatedSection>

        {/* Project Search Bar */}
        {projects.length > 0 ? (
          <ProjectSearchBar dataToFilter={projects} />
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            Loading projects...
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;