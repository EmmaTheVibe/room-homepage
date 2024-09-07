import { useState } from "react";
import { carouselData } from "../utils/data";
import Carousel from "./Carousel";
import Clicker from "./Clicker";
import Info from "./Info";

export default function Home({ matches }) {
  const [selectedId, setSelectedId] = useState(0);

  const nextImage = () => {
    setSelectedId((curr) => {
      if (curr === carouselData.length - 1) return 0;
      return curr + 1;
    });
  };
  const prevImage = () => {
    setSelectedId((curr) => {
      if (curr === 0) return carouselData.length - 1;
      return curr - 1;
    });
  };
  return (
    <section className="home" id="home">
      <Carousel
        selectedId={selectedId}
        carouselData={carouselData}
        matches={matches}
      >
        {!matches && <Clicker nextImage={nextImage} prevImage={prevImage} />}
      </Carousel>
      <Info carouselData={carouselData} selectedId={selectedId}>
        {matches && <Clicker nextImage={nextImage} prevImage={prevImage} />}
      </Info>
    </section>
  );
}
