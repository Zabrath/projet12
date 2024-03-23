import React from "react";
import "./Skills.scss";
import htmlLogo from "../../assets/Skills/skillsHtml289x400px.png";
import JsLogo from "../../assets/Skills/skillsJavaScript289x400px.png";
import SassLogo from "../../assets/Skills/skillsSass289x400px.png";
import ReactLogo from "../../assets/Skills/skillsReact289x400px.png";
import AdobeLogo from "../../assets/Skills/skillsAdobe289x400px.png";

function Skills() {
  return (
    <main>
      <section className="pageSkills" id="skills">
        <h2 className="pageSkills__titre">Mes compétences à votre service</h2>
        <div className="pageSkills__logosContainer">
          <span className="pageSkills__logos">
            <img src={htmlLogo} alt="html" title="html" />
          </span>
          <span className="pageSkills__logos">
            <img src={ReactLogo} alt="React" title="React" />
          </span>
          <span className="pageSkills__logos">
            <img src={SassLogo} alt="Sass" title="Sass" />
          </span>
          <span className="pageSkills__logos">
            <img src={AdobeLogo} alt="Adobe" title="Adobe" />
          </span>
          <span className="pageSkills__logos">
            <img src={JsLogo} alt="JavaScript" title="JavaScript" />
          </span>
        </div>
        <div className="pageSkills__formContainer">
        <a href="mailto:contact@malghemlaura.com" className="pageSkills__contact">Contactez moi !</a>
        </div>
      </section>
    </main>
  );
}

export default Skills;

