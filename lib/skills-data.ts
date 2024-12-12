import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Settings,
} from "lucide-react";

export const skillsData = [
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      {
        name: "React",
        level: 90,
        color: "from-gray-600 to-gray-900",
        description: "Component-based UI development",
      },
      {
        name: "Next.js",
        level: 85,
        color: "from-gray-600 to-gray-900",
        description: "Full-stack React framework",
      },
      {
        name: "TypeScript",
        level: 88,
        color: "from-gray-600 to-gray-900",
        description: "Type-safe JavaScript development",
      },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        level: 85,
        color: "from-gray-600 to-gray-900",
        description: "Server-side JavaScript runtime",
      },
      {
        name: "Python",
        level: 80,
        color: "from-gray-600 to-gray-900",
        description: "Versatile programming language",
      },
      {
        name: "REST APIs",
        level: 90,
        color: "from-gray-600 to-gray-900",
        description: "API development and integration",
      },
    ],
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      {
        name: "MongoDB",
        level: 85,
        color: "from-gray-600 to-gray-900",
        description: "NoSQL database",
      },
      {
        name: "SQL",
        level: 82,
        color: "from-gray-600 to-gray-900",
        description: "Relational database management",
      },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: Settings,
    skills: [
      {
        name: "Git",
        level: 88,
        color: "from-gray-600 to-gray-900",
        description: "Version control system",
      },
      {
        name: "Docker",
        level: 80,
        color: "from-gray-600 to-gray-900",
        description: "Container platform",
      },
    ],
  },
];