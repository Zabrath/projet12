import React from "react";
import "./Skills.scss";
import htmlLogo from "../../assets/Skills/skillsHtml289x400px.png";
import JsLogo from "../../assets/Skills/skillsJavaScript289x400px.png";
import SassLogo from "../../assets/Skills/skillsSass289x400px.png";
import ReactLogo from "../../assets/Skills/skillsReact289x400px.png";
import AdobeLogo from "../../assets/Skills/skillsAdobe289x400px.png";
import Form from "../../components/form/Form";

function Skills() {
  return (
    <main>
      <section className="pageSkills" id="skills">
        <h1 className="pageSkills__titre">Mes compétences à votre service</h1>
        <div className="pageSkills__logosContainer">
          <span className="pageSkills__logos">
            <img src={htmlLogo} alt="" />
          </span>
          <span className="pageSkills__logos">
            <img src={ReactLogo} alt="" />
          </span>
          <span className="pageSkills__logos">
            <img src={SassLogo} alt="" />
          </span>
          <span className="pageSkills__logos">
            <img src={AdobeLogo} alt="" />
          </span>
          <span className="pageSkills__logos">
            <img src={JsLogo} alt="" />
          </span>
        </div>
        <div className="pageSkills__formContainer">
        <h1 className="pageSkills__titre">Contactez moi pour plus d'informations !</h1>
          <Form />
        </div>
      </section>
    </main>
  );
}

export default Skills;

