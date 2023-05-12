import { About } from "components/about/About";
import { Contact } from "components/contact/Contact";
import { Experience } from "components/experience/Experience";
import { HeroSection } from "components/hero/HeroSection";

export default function Home() {
  return (
    <main>
      <div className="bg" />

      <HeroSection />

      <About />

      <Experience />
      <div className="w-full h-screen text-white">Work</div>
      <Contact />
    </main>
  );
}
