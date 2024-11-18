import AboutPage from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";

export default function Home() {
  return (
    <main className="pt-16">
      <div id="home" className="section-container">
        <Hero />
      </div>
      <div id="about" className="section-container">
        <AboutPage />
      </div>
      <div id="project" className="section-container">
        <Projects />
      </div>
      <div id="contact" className="section-container">
        <Contact />
      </div>
    </main>
  );
}
