import Working from "../components/Working";
import TeaDescription from "../components/TeaDescription";
import HeroSection from "../components/SecondHeroSection";
import HoursAndBookingInfo from "../components/HoursAndBookingInfo";
import DropdownButton from "../components/DropdownButton";
import MenuItem from "../components/MenuItem";


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
        <MenuItem nombre="Halloumi Bao (V)" ingredientes="| Zing chilli, basil, pickled cucumber" precio="20" imagen="src/img/huevos.png"/>


        </div>

        </>
    )

}

export default Contact;