import Working from "../components/Working";
import TeaDescription from "../components/TeaDescription";
import HeroSection from "../components/SecondHeroSection";
import HoursAndBookingInfo from "../components/HoursAndBookingInfo";
import DropdownButton from "../components/DropdownButton";

function Contact () {
    return(
        <>
        <div>
        <HeroSection
                imageSrc="src/assets/images/30ef8a84f0f4e51616f759e50c285eff.png"
                title="Experience the tranquility"
            />
        <TeaDescription/>
        <HoursAndBookingInfo/>
        <DropdownButton/>


        </div>

        </>
    )

}

export default Contact;