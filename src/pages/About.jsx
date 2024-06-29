import HeroSection from "../components/SecondHeroSection";
import LightGreenBannerDos from "../components/LightGreenBannerDos";
import { useEffect } from "react";

// Img
import heroImage from '/public/images/fdc8df30447e9ccaf27861f2b851b8ec.png';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
      }, []);
    
      return (

        <div>
            <HeroSection
                imageSrc={heroImage}
                title="Four generations celebrating the lake"
            />
            <LightGreenBannerDos />
        </div>
    );
}

export default About;