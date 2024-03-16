import React from "react";
import "./Projets.scss";
import Carousel from "../../components/carousel/carousel";
import { coverCarousel } from "../../data";

function Projets() {
  const images = coverCarousel.map((project) => project.cover);
  const links = coverCarousel.map((project) => project.link);
  return (
    <main>
      <section className="pageProjets" id="projets">
        <div className="pageProjets__text" >
        <p>
          J'ai travaillé sur divers projets de développement web au sein de la formation OpenClassroom, démontrant ma
          capacité à collaborer avec d'autres et à livrer des résultats fiables
          dans des délais serrés.
        </p>
        </div>
        <div className="pageProjets__carousel">
        <Carousel images={images} links={links} />
        </div>
      </section>
    </main>
  );
}

export default Projets;
