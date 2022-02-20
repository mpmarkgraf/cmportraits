import Carousel from "../components/carousel/Carousel";
import { CarouselData } from "../components/carousel/CarouselData";

function HomePage() {
  return <Carousel slides={CarouselData} />;
}

export default HomePage;
