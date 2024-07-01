import './index.css'; // Asegúrate de que este es el camino correcto al archivo CSS
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../src/global.css"
import Footer from './components/Footer';

// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import CardSlider from './components/card_slider/CardSlider';
// import Card from './components/Card';
// import RatingSlider from './components/rating_slider/RatingSlider'
// import MenuComponent from './components/menu_components/MenuComponents';
// import ForestBanner from './components/ForestBanner';
// import MenuLine from './components/MenuLine';
// import LightGreenBanner from './components/LightGreenBanner';
// import PhotoGallery from './components/PhotoGallery';
// import HeroBanner from './components/HeroBanner';

//PAGES
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Boat from './pages/Boat.jsx';
import Accomodation from './pages/Accomodation.jsx';
import Restaurant from './pages/Restaurant.jsx';
import Functions from './pages/Functions.jsx'
//React router
import { Routes, Route } from 'react-router-dom';

function App() {
  // const [buttonClicked, setButtonClicked] = useState(false); // Define el estado para manejar el clic

  return (
    <>
    <Navbar/>

    <Routes>
        <Route path="/lake_" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/boat" element={<Boat/>} />
        <Route path="/accomodation" element={<Accomodation/>} />
        <Route path="/restaurant" element={<Restaurant/>} />
        <Route path="/functions" element={<Functions/>} />

    </Routes>

    <Footer/>
    

</>

  );
}

export default App;