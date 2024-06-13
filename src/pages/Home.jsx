import HeroBanner from "../components/HeroBanner";
import CardSlider from "../components/card_slider/CardSlider";
import LightGreenBanner from "../components/LightGreenBanner";
import MenuLine from "../components/MenuLine";
import MenuComponent from "../components/menu_components/MenuComponents";
import PhotoGallery from "../components/PhotoGallery";
import ForestBanner from "../components/ForestBanner";
import RatingSlider from "../components/rating_slider/RatingSlider";
import NuevoBanner from "../components/NuevoBanner";


function Home() {
    return(
        <div>
            <HeroBanner/>
            <CardSlider/>
            <NuevoBanner/>
            <MenuLine/>
            <MenuComponent/>
            <PhotoGallery/>
            <ForestBanner/>
            <RatingSlider/>
        </div>
    )
}

export default Home;