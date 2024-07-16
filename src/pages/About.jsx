import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from "../components/SecondHeroSection";
import LightGreenBannerDos from "../components/LightGreenBannerDos";
import heroImage from '/public/images/about.jpg';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
    }, []);

    return (
        <div>
            <Helmet>
                <title>Our Story at Lake Barrine | Four Generations Celebrating the Lake</title>
                <meta name="description" content="Discover the rich history of Lake Barrine as told through four generations. Dive into our story and see how each generation has celebrated and preserved this natural gem." />
                <meta name="keywords" content="Lake Barrine, history of Lake Barrine, Lake Barrine story, celebrating Lake Barrine" />
            </Helmet>
            <HeroSection
                imageSrc={heroImage}
                title="Four generations celebrating the lake"
            />
            <LightGreenBannerDos />
        </div>
    );
}

export default About;