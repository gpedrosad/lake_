import Working from "../components/Working";
import TeaDescription from "../components/TeaDescription";
import HeroSection from "../components/SecondHeroSection";
import HoursAndBookingInfo from "../components/HoursAndBookingInfo";
import DropdownButton from "../components/DropdownButton";
import MenuItem from "../components/MenuItem";
import IframeComponent from "../components/IframeComponent";
import VideoBanner from "../components/VideoBanner";

//img
import heroimg from '/public/images/30ef8a84f0f4e51616f759e50c285eff.png'

function Contact () {
    return(
        <>
        <div>
        <HeroSection
                imageSrc={heroimg}
                title="Our Story"
                />
        <TeaDescription/>
        <HoursAndBookingInfo/>
        <DropdownButton/>

        <div className="flex justify-center bg-black-87">

            <iframe data-id="nbi-widget" 
            src="https://bookings.nowbookit.com/?accountid=01ef376f-9a34-42b0-a930-87a37b427ef2&venueid=12083&theme=light&colors=hex,0d5302&font=Barlow" 
            width="800" 
            height="600">
            </iframe>
            <script src="https://plugins.nowbookit.com/iframe-resizer-build/bundle.js"></script>
        </div>

        </div>

        </>
    )

}

export default Contact;