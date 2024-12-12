"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skillsData } from "@/lib/skills-data";
import { useState } from "react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100 to-white dark:from-blue-950/20 dark:to-background opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>

      <div className="container px-4 mx-auto relative z-10">
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency levels across different areas of software development.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <Card key={category.category} className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-950/50">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="space-y-2"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                          {skill.name}
                        </span>
                        {hoveredSkill === skill.name && (
                          <span className="text-sm text-muted-foreground">
                            {skill.description}
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-medium">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-gray-200 dark:bg-gray-700"
                    >
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </Progress>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}