import AboutPage from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
