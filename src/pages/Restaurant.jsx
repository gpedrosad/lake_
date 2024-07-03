// import Working from "../components/Working";
import TeaDescription from "../components/TeaDescription";
import HeroResto from "../components/HeroResto";
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
        <HeroResto
                imageSrc={heroimg}
                title="Teahouse"
                title2="Lake Barrine"

                />
        <TeaDescription/>
        <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>
        <HoursAndBookingInfo/>
        <div className="mx-auto bg-yellow-500 h-1 w-3/4 sm:w-1/2"></div>

        <DropdownButton/>

        

        </div>

        </>
    )

}

export default Contact;