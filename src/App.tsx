// // // // import React from "react";
// // // // import HomePage from "./portcomponents/HomePage";

// // // // const App: React.FC = () => {
// // // //   return (
// // // //     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
// // // //       <HomePage />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;


// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import HomePage from "./portcomponents/HomePage";
// // // import Projects from "./portcomponents/Projects";
// // // import UnrealEngine from "./portcomponents/UnrealEngine";
// // // import Blender from "./portcomponents/Blender";
// // // import Writing from "./portcomponents/Writing";
// // // import About from "./portcomponents/About";

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         <Route path="/" element={<HomePage />} />
// // //         <Route path="/projects" element={<Projects />} />
// // //         <Route path="/unreal" element={<UnrealEngine />} />
// // //         <Route path="/blender" element={<Blender />} />
// // //         <Route path="/writing" element={<Writing />} />
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

// // function App() {
// //   return (
// //     <Router>
// //       <Navbar /> {/* Navbar appears on all pages */}
// //       <Routes>
// //         <Route path="/" element={<HomePage />} />
// //         <Route path="/projects" element={<Projects />} />
// //         <Route path="/unreal" element={<UnrealEngine />} />
// //         <Route path="/blender" element={<Blender />} />
// //         <Route path="/writing" element={<Writing />} />
// //         <Route path="/about" element={<About />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./portcomponents/HomePage";
// import Projects from "./portcomponents/Projects";
// import UnrealEngine from "./portcomponents/UnrealEngine";
// import Writing from "./portcomponents/Writing";
// import Blender from "./portcomponents/Blender";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/unrealengine" element={<UnrealEngine />} />
//         <Route path="/writing" element={<Writing />} />
//         <Route path="/blender" element={<Blender />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./portcomponents/HomePage";
import Projects from "./portcomponents/Projects";
import UnrealEngine from "./portcomponents/UnrealEngine";
import Writing from "./portcomponents/Writing";
import Blender from "./portcomponents/Blender";
import NavBar from "./portcomponents/Navbar"; // Import the navbar

function App() {
  return (
    <Router>
      <NavBar /> {/* Add the NavBar here so it's visible on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/unrealengine" element={<UnrealEngine />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/blender" element={<Blender />} />
      </Routes>
    </Router>
  );
}

export default App;
