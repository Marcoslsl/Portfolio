import AboutMe from "../AboutMe";
import Education from "../Education";
import Experience from "../Experience";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Experience />
      <Education />
      <MySkills />
      <MyPortfolio />
      <Footer />
    </>
  );
}
