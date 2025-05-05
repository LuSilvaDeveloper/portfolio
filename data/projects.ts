import { Project } from "@/components/sections/Projects";

export const projects: Project[] = [
    {
        title: "Clocking System",
        description:
            "A modern employee time tracking system with real-time analytics",
        image: "/clocking.png?height=200&width=400",
        longDescription:
            "Developed a full-stack application for businesses to track employee hours, manage shifts, and generate reports. Features include real-time updates, role-based access, and integration with payroll systems.",
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        githubLink: "https://github.com",
        demoLink: "https://demo-link.com",
    },
    {
        title: "Auth API",
        description: "A secure authentication and authorization API service",
        image: "/authapi.png?height=200&width=400",
        longDescription:
            "Built a robust authentication API with JWT, OAuth, and role-based access control. Features include password reset, email verification, and detailed audit logs for security compliance.",
        technologies: ["Express", "JWT", "PostgreSQL", "Redis"],
        githubLink: "https://github.com",
        demoLink: "https://demo-link.com",
    },
    {
        title: "Todo App",
        description:
            "A sleek and responsive todo app with theme support",
        image: "/todo.png?height=200&width=400",
        longDescription:
            "A modern Todo app built with React that allows users to add, edit, and delete tasks. It features light and dark themes, and uses localStorage to persist tasks across sessions. Designed with simplicity and user experience in mind.",
        technologies: ["React", "JavaScript", "localStorage", "CSS"],
        githubLink: "https://github.com/LuSilvaDeveloper/TodoMatic",
        demoLink: "https://todo-matic.vercel.app/",
    },
    {
        title: "Frogger",
        description: "A remake of the classic arcade game Frogger",
        image: "/frogger.png?height=200&width=400",
        longDescription:
            "A fun and challenging remake of the classic Frogger game, built using modern game development techniques. Players guide a frog across roads and rivers, avoiding cars and hazards to reach safety. Features smooth animations, increasing difficulty, and a scoring system.",
        technologies: ["Javascript", "HTML", "Canvas"],
        githubLink: "https://github.com/LuSilvaDeveloper/Frogger",
        demoLink: "https://frogger-neo-djste.vercel.app/",
    },
];
