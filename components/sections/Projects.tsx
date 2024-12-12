"use client";

import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform built with Next.js and Node.js",
    tech: ["Next.js", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop"
  },
  {
    title: "Task Management App",
    description: "Real-time task management application with team collaboration features",
    tech: ["React", "Firebase", "Material-UI"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=400&fit=crop"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with Next.js and Tailwind CSS",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-purple-100 dark:from-pink-950/20 dark:to-purple-950/20 opacity-50"></div>
      <div className="container px-4 mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}