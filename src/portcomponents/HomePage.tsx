

// // // import React, { useState, useEffect } from "react";

// // // const HomePage: React.FC = () => {
// // //   const [darkMode, setDarkMode] = useState(
// // //     localStorage.getItem("theme") === "dark"
// // //   );

// // //   useEffect(() => {
// // //     if (darkMode) {
// // //       document.documentElement.classList.add("dark");
// // //       localStorage.setItem("theme", "dark");
// // //     } else {
// // //       document.documentElement.classList.remove("dark");
// // //       localStorage.setItem("theme", "light");
// // //     }
// // //   }, [darkMode]);

// // //   return (
// // //     <div className="flex flex-col items-center justify-center min-h-screen w-full px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
// // //       {/* Dark Mode Toggle */}
// // //       <button
// // //         onClick={() => setDarkMode(!darkMode)}
// // //         className="absolute top-5 right-5 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-md transition"
// // //       >
// // //         {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
// // //       </button>

// // //       <div className="text-center max-w-3xl">
// // //         <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
// // //         <p className="text-xl text-gray-600 dark:text-gray-400">
// // //           Showcasing Full-Stack Projects, Unreal Engine Work, Blender 3D Models, and Writing
// // //         </p>
// // //       </div>

// // //       {/* Navigation */}
// // //       <nav className="mt-10 flex flex-wrap justify-center gap-6">
// // //         {["Projects", "Unreal Engine", "Blender", "Writing", "About"].map((item) => (
// // //           <a
// // //             key={item}
// // //             href={`#${item.toLowerCase().replace(" ", "")}`}
// // //             className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline transition"
// // //           >
// // //             {item}
// // //           </a>
// // //         ))}
// // //       </nav>
// // //     </div>
// // //   );
// // // };

// // // export default HomePage;

// // const HomePage = () => {
// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen pt-24 px-6 text-center">
// //       {/* Welcome Section */}
// //       <div className="mb-10 max-w-3xl">
// //         <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
// //           Welcome to My Portfolio
// //         </h1>
// //         <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
// //           Showcasing Full-Stack Projects, Unreal Engine Work, Blender 3D Models, and Writing
// //         </p>
// //       </div>

// //       {/* Navigation Bar */}
// //       <nav className="bg-gray-100 dark:bg-gray-800 shadow-md fixed top-0 left-0 w-full py-4">
// //         <div className="max-w-4xl mx-auto flex justify-center space-x-6">
// //           <a href="#projects" className="nav-link">Projects</a>
// //           <a href="#unreal" className="nav-link">Unreal Engine</a>
// //           <a href="#blender" className="nav-link">Blender</a>
// //           <a href="#writing" className="nav-link">Writing</a>
// //           <a href="#about" className="nav-link">About</a>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default HomePage;


// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-10 mt-10">
//       <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome to My Portfolio</h1>
//       <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 text-center max-w-3xl">
//         Showcasing Full-Stack Projects, Unreal Engine Work, Blender 3D Models, and Writing.
//       </p>

//       {/* Navigation Menu */}
//       <nav className="mt-6 flex gap-6 flex-wrap justify-center">
//         <Link to="/projects" className="text-lg text-blue-500 hover:text-blue-700">Projects</Link>
//         <Link to="/unreal" className="text-lg text-blue-500 hover:text-blue-700">Unreal Engine</Link>
//         <Link to="/blender" className="text-lg text-blue-500 hover:text-blue-700">Blender</Link>
//         <Link to="/writing" className="text-lg text-blue-500 hover:text-blue-700">Writing</Link>
//         <Link to="/about" className="text-lg text-blue-500 hover:text-blue-700">About</Link>
//       </nav>
//     </div>
//   );
// };

// export default HomePage;

import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 mt-16">
      <Navbar />
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl text-center">
        Showcasing Full-Stack Projects, Unreal Engine Work, Blender 3D Models, and Writing.
      </p>
    </div>
  );
};

export default HomePage;
