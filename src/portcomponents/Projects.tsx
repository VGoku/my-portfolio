

// const Projects = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-10 mt-10">
//     <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h1>
//     <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 text-center max-w-3xl">
//       Here are some of the projects I've worked on, including web apps and full-stack solutions.
//     </p>
//   </div>
//   );
// };

// export default Projects;


import { useState } from "react";
import Navbar from "./Navbar";

const Projects = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 mt-16">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl text-center">
        Here are some of the projects I've worked on, including web apps and full-stack solutions.
      </p>
    </div>
  );
};

export default Projects;

