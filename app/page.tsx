import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-6 border-t">
        <div className="container px-4 mx-auto text-center text-muted-foreground">
          <p>© 2024 Moch Abdul Aziz. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}