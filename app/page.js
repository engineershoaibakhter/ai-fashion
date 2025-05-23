import styles from "./page.module.css";
import './globals.css';
import Location from "./components/Location"
import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import ModernCarousel from "./components/ModernCarousel";
import Commercial from "./components/Commercial";

export default function Home() {
  return (
    <>
   
      <ModernCarousel />
        {/* <Team /> */}
      <Commercial />
        <Testimonials />
        <About />
        <Location />
        <Contact />
      
    </>
  );
}
