


// // import { Link } from "react-router-dom";

// // const NavBar = () => {
// //   return (
// //     <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 px-8 flex justify-center space-x-6 z-50">
// //       <Link className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-500 transition duration-300" to="/">Home</Link>
// //       <Link className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-500 transition duration-300" to="/projects">Projects</Link>
// //       <Link className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-500 transition duration-300" to="/unrealengine">Unreal Engine</Link>
// //       <Link className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-500 transition duration-300" to="/blender">Blender</Link>
// //       <Link className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-500 transition duration-300" to="/writing">Writing</Link>
// //     </nav>
// //   );
// // };

// // export default NavBar;

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/projects">Projects</Link>
//       <Link to="/unrealengine">UnrealEngine</Link>
//       <Link to="/writing">Writing</Link>
//       <Link to="/blender">Blender</Link>
//     </nav>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-900 text-white">
      <Link to="/" className="hover:text-gray-400">Home</Link>
      <Link to="/projects" className="hover:text-gray-400">Projects</Link>
      <Link to="/unrealengine" className="hover:text-gray-400">UnrealEngine</Link>
      <Link to="/writing" className="hover:text-gray-400">Writing</Link>
      <Link to="/blender" className="hover:text-gray-400">Blender</Link>
    </nav>
  );
}

export default Navbar;
