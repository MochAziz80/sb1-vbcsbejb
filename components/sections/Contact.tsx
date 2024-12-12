"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100 to-blue-100 dark:from-purple-950/20 dark:to-blue-950/20 opacity-50"></div>
      <div className="container px-4 mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Get In Touch
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-950 dark:hover:to-blue-950 border-2"
            asChild
          >
            <Link href="https://github.com/yourusername" target="_blank">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-950 dark:hover:to-blue-950 border-2"
            asChild
          >
            <Link href="https://linkedin.com/in/yourusername" target="_blank">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-950 dark:hover:to-blue-950 border-2"
            asChild
          >
            <Link href="mailto:your.email@example.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}