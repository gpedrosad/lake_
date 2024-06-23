import HeroSection from "../components/SecondHeroSection";
import LightGreenBannerDos from "../components/LightGreenBannerDos";

// Img
import heroImage from '/public/images/fdc8df30447e9ccaf27861f2b851b8ec.png';

function About() {
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