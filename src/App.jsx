
import './App.css'
import AboutSection from './components/about'
import BackToTopButton from './components/back'
import ContactSection from './components/contact'
import Footer from './components/footer'
import HomeSection from './components/hero'
import Navbar from './components/nav'
import ProjectsSection from './components/project'
import SkillsSection from './components/skill'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);


  return (
    <>
      <div class="bg-gray-50 text-gray-800">
        <Navbar />
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <BackToTopButton />
      </div>
    </>
  )
}

export default App
