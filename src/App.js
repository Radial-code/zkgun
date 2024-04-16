import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Finance from "./components/Finance";
import JoinZkgun from "./components/JoinZkgun";
import CoreValue from "./components/CoreValue";
import OurEcosystem from "./components/OurEcosystem";
import BackToTop from "./components/common/BackToTop";
import Discover from "./components/Discover";
import OurCapabilities from "./components/OurCapabilities";
import Decentralized from "./components/Decentralized";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <BackToTop />
        <Header />
        <Hero />
        <Finance />
        <OurEcosystem />
        <CoreValue />
        <OurCapabilities />
        <Discover />
        <Decentralized />
        <JoinZkgun />
        <Footer />
      </div>
    </>
  );
}

export default App;
