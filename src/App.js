import BackToTop from "./components/BackToTop";
import CardText from "./components/CardText";
import CarouselContainer from "./components/CarouselContainer";
import CarouselContainer2 from "./components/CarouselContainer2";
import FollowMicrosoft from "./components/FollowMicrosoft";
import Footer from "./components/Footer";
import ForBusiness from "./components/ForBusiness";
import Introducing from "./components/Introducing";
import MicrosofProducts from "./components/MicrosofProducts";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <CarouselContainer />
      <MicrosofProducts />
      <CardText />
      <Introducing />
      <ForBusiness />
      <CarouselContainer2 />
      <FollowMicrosoft />
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;
