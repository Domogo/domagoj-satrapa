import { About } from "components/about/About";
import { Contact } from "components/contact/Contact";
import { Experience } from "components/experience/Experience";
import { HeroSection } from "components/hero/HeroSection";
import { Work } from "components/work/Work";

export default function Home() {
  return (
    <main>
      <div className="bg" />

      <HeroSection />

      <About />

      <Experience />

      {/* get more cool projects to showcase */}
      {/* <Work /> */}

      <Contact />
    </main>
  );
}
