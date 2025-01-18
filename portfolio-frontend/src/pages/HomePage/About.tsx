import React from "react";
import Button from "../../components/Button"; // Assuming a custom button component exists.

const About: React.FC = () => {
  const tools = [
    "Visual Studio Code", "Git and GitHub", "Docker", "Postman", "Figma"
  ];
  const skills = ["Python", "Java", "TypeScript", "React", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "FastApi", "Spring Boot"
  ];
  return (
    <div className="w-full px-8  flex flex-col justify-center items-center py-16 bg-gradient-to-tr from-white via-gray-50 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
      {/* Section Title */}
      <div className="text-center mt-8">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          About Me
        </h2>
        <div className="w-32 h-1 mx-auto mt-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
        <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
          Get to know more about me, my tools, and skills!
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-24 flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0 md:space-x-10">
        {/* Left Column: About Information */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-base text-justify md:text-lg leading-relaxed">
            I'm a dedicated software engineer with a knack for problem-solving and a love for continuous learning.
          </p>
          <p className="text-base text-justify md:text-lg leading-relaxed">
            While I dabble in all things code, and currently learning about machine learning, I specialize in crafting efficient, scalable backend systems and creating delightful digital experiences. Some might call me a full stack wizard 🧙‍♂️, but I prefer "polymath" (it sounds fancier, right? 😄).
          </p>
          <p className="text-base text-justify md:text-lg leading-relaxed">
            When I'm not coding, you can find me exploring new tech trends, reading books, or dreaming up my next big project.
          </p>
          <p className="text-base text-justify md:text-lg leading-relaxed">
            I'm currently open to new opportunities where I can contribute and grow
            as a developer. Let's connect and make some magic happen! ✨
          </p>
          {/* Buttons */}
          <div className="flex space-x-6">
            <Button className="w-48 h-16 px-10 py-4 text-lg font-medium rounded-lg bg-indigo-500 text-gray-100 dark:bg-indigo-600 dark:text-gray-100 hover:bg-indigo-600 dark:hover:bg-indigo-700 shadow-lg">
              Contact
            </Button>
            <Button className="w-48 h-16 px-10 py-4 text-lg font-medium rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 shadow-lg">
              Resume
            </Button>
          </div>
        </div>

        {/* Right Column: Tools and Skills */}
        <div className="md:w-1/2 space-y-20">
          {/* Tools Section */}
          <div>
            <h3 className="text-2xl mt-8 md:mt-0 md:text-3xl font-semibold text-indigo-500 dark:text-indigo-400">
              Tools I Use
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {tools.map((tool, index) => (
                <li
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 dark:from-blue-900 dark:to-indigo-900 dark:text-blue-200 rounded-md text-center font-medium shadow-sm"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-indigo-500 dark:text-indigo-400">
              My Skills
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:from-purple-900 dark:to-pink-900 dark:text-purple-200 rounded-md text-center font-medium shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
