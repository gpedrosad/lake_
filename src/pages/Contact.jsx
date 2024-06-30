// import Working from "../components/Working";
import TeaDescription from "../components/TeaDescription";
import HeroSection from "../components/SecondHeroSection";
import HoursAndBookingInfo from "../components/HoursAndBookingInfo";
import DropdownButton from "../components/DropdownButton";
import { useEffect } from "react";
// import MenuItem from "../components/MenuItem";
// import IframeComponent from "../components/IframeComponent";
// import VideoBanner from "../components/VideoBanner";

//img
import heroimg from '/public/images/banner_restaurante.jpg'

function Contact () {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
      }, []);
    return(
        <>
        <div>
        <HeroSection
                imageSrc={heroimg}
                title="Restaurant"
                />
        <TeaDescription/>
        <HoursAndBookingInfo/>
        <DropdownButton/>

        

        </div>

        </>
    )

}

export default Contact;