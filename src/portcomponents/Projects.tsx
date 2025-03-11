import { useState } from "react";
import Navbar from "./Navbar";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectData {
  title: string;
  role: string;
  description: string[];
  technologies: string;
  github: string;
  demo: string;
}

const projectsData: ProjectData[] = [
  {
    title: "VGoku Pizzeria",
    role: "Full Stack Developer",
    description: [
      "Developed a pizza ordering platform allowing users to customize orders, track deliveries, and manage cart items.",
      "Implemented a responsive UI with Styled Components to enhance the user experience.",
      "Integrated real-time updates for order status using React state management."
    ],
    technologies: "React",
    github: "https://github.com/VGoku/vgoku-pizzeria.git",
    demo: "https://pizzaapp1.vercel.app/"
  },
  {
    title: "Movie App",
    role: "Full Stack Developer",
    description: [
      "Built a movie browsing and discovery app with search functionality, detailed movie pages, and user ratings.",
      "Utilized external APIs to fetch and display movie data dynamically.",
      "Designed an intuitive UI for seamless navigation and interaction."
    ],
    technologies: "React",
    github: "https://github.com/VGoku/movie-app.git",
    demo: "https://movie-av1-app.vercel.app/"
  },
  {
    title: "E-Commerce Platform",
    role: "Full Stack Developer",
    description: [
      "Created a modern e-commerce platform with secure payment processing using Stripe.",
      "Implemented authentication and user management with Supabase.",
      "Developed a product catalog, cart functionality, and an order tracking system."
    ],
    technologies: "React, Supabase, Stripe",
    github: "https://github.com/VGoku/e-commerce-platform",
    demo: "https://e-commerce-platform-orcin.vercel.app/"
  },
  {
    title: "Task Management Application",
    role: "Full Stack Developer",
    description: [
      "Built a task management tool that allows users to create, edit, and track tasks efficiently.",
      "Designed a user-friendly dashboard for organizing and prioritizing tasks.",
      "Integrated drag-and-drop functionality for seamless task reordering."
    ],
    technologies: "React",
    github: "https://github.com/VGoku/task-management-application.git",
    demo: "https://task-management-application02.vercel.app/"
  }
];

const ProjectCard = ({ project }: { project: ProjectData }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-2">{project.role}</p>
    <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
      {project.description.map((item, index) => (
        <li key={index} className="mb-1">{item}</li>
      ))}
    </ul>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      <span className="font-semibold">Technologies:</span> {project.technologies}
    </p>
    <div className="flex space-x-4">
      <a href={project.github} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
        <FaGithub className="mr-2" /> GitHub
      </a>
      <a href={project.demo} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
        <FaExternalLinkAlt className="mr-2" /> Live Demo
      </a>
    </div>
  </div>
);

const Projects = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 mt-16">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Projects</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl text-center">
        Here are some of the projects I've worked on, including web apps and full-stack solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

