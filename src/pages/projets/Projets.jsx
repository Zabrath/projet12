import React from "react";
import "./Projets.scss";
import Carousel from "../../components/carousel/carousel";

function Projets() {
  return (
    <main>
      <section className="pageProjets" id="projets">
        <div className="pageProjets__text" >
        <h1>
          J'ai travaillé sur divers projets au sein de la formation OpenClassroom.
        </h1>
        </div>
        <div className="pageProjets__carousel">
        <Carousel />
        </div>
      </section>
    </main>
  );
}

export default Projets;