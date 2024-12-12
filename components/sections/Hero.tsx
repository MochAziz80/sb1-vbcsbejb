"use client";

import { Button } from "@/components/ui/button";
import { Mail, Code } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10 animate-gradient"></div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rotate-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full -rotate-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="mb-8 inline-block">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQE57JyIMpb5TA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721322193420?e=1739404800&v=beta&t=cW1rN19e4k766-k8V_crZWWcKRlN6p2XignRSemAEfw"
            alt="Moch Abdul Aziz"
            className="w-32 h-32 rounded-full border-4 border-white shadow-xl mb-6 mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Moch Abdul Aziz
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Backend Developer & Software Engineer
        </p>
        <div className="flex justify-center gap-4">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            size="lg"
            asChild
          >
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10"
            asChild
          >
            <Link href="#projects">
              <Code className="mr-2 h-4 w-4" />
              View Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}