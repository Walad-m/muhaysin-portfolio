import Hero from "./components/hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // Import it here

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact /> {/* New Section */}
      
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-muted text-sm">© 2026 Muhaysin Muqtar. All rights reserved.</p>
      </footer>
    </div>
  );
}