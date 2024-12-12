"use client";

import { Card } from "@/components/ui/card";
import { User, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100 to-white dark:from-purple-950/20 dark:to-background opacity-50"></div>
      <div className="container px-4 mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Hello! I'm Moch Abdul Aziz, a dedicated Backend Developer specializing in building robust and scalable server-side applications. My expertise lies in using Node.js and .NET to create efficient backend systems that support modern web applications.
            </p>
            <p className="text-lg text-muted-foreground">
              With a strong foundation in both backend development,
              I strive to create elegant solutions that solve real-world problems.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-2">
              <User className="w-8 h-8 mx-auto mb-4 text-purple-600" />
              <h3 className="font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground">4+ Years</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-2">
              <Code className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">Projects</h3>
              <p className="text-muted-foreground">10+ Completed</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}