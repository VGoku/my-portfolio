// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import HomePage from "./portcomponents/HomePage";
// // // import Projects from "./portcomponents/Projects";
// // // import UnrealEngine from "./portcomponents/UnrealEngine";
// // // import Writing from "./portcomponents/Writing";
// // // import Blender from "./portcomponents/Blender";
// // // import NavBar from "./portcomponents/Navbar"; // Import the navbar
// // // import About from "./portcomponents/About";

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <NavBar /> {/* Add the NavBar here so it's visible on all pages */}
// // //       <Routes>
// // //         <Route path="/" element={<HomePage />} />
// // //         <Route path="/projects" element={<Projects />} />
// // //         <Route path="/unrealengine" element={<UnrealEngine />} />
// // //         <Route path="/writing" element={<Writing />} />
// // //         <Route path="/blender" element={<Blender />} />
// // //         <Route path="/about" element={<About />} />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;


// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./portcomponents/Navbar";
// // import HomePage from "./portcomponents/HomePage";
// // import Projects from "./portcomponents/Projects";
// // import UnrealEngine from "./portcomponents/UnrealEngine";
// // import Blender from "./portcomponents/Blender";
// // import Writing from "./portcomponents/Writing";
// // import About from "./portcomponents/About";

// // const App = () => {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<HomePage />} />
// //         <Route path="/projects" element={<Projects />} />
// //         <Route path="/unrealengine" element={<UnrealEngine />} />
// //         <Route path="/blender" element={<Blender />} />
// //         <Route path="/writing" element={<Writing />} />
// //         <Route path="/about" element={<About />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Navbar from "./portcomponents/Navbar";
// import HomePage from "./portcomponents/HomePage";
// import Projects from "./portcomponents/Projects";
// import UnrealEngine from "./portcomponents/UnrealEngine";
// import Blender from "./portcomponents/Blender";
// import Writing from "./portcomponents/Writing";
// import About from "./portcomponents/About";

// const App = () => {
//   // Light/Dark mode state
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   // Apply theme to body
//   useEffect(() => {
//     document.documentElement.className = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   // Toggle function
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <Router>
//       <div className={`app ${theme}`}>
//         {/* Light/Dark Mode Toggle */}
//         <button onClick={toggleTheme} className="theme-toggle">
//           {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
//         </button>

//         {/* Navigation */}
//         <Navbar />

//         {/* Page Routes */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/unrealengine" element={<UnrealEngine />} />
//           <Route path="/blender" element={<Blender />} />
//           <Route path="/writing" element={<Writing />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./portcomponents/Navbar"; // Adjusted path
import Home from "./portcomponents/HomePage"; 
import About from "./portcomponents/About";
import UnrealEngine from "./portcomponents/UnrealEngine";
import Writing from "./portcomponents/Writing";
import Blender from "./portcomponents/Blender";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/unrealengine" element={<UnrealEngine />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/blender" element={<Blender />} />
      </Routes>
    </Router>
  );
}

export default App;
