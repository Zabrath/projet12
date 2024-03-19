import React, { useEffect, useRef, useState } from "react";
import "./Infos.scss";

function Infos() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2 // Adjust threshold as needed
    });

    if (textElement) {
      observer.observe(textElement);
    }

    return () => {
      if (textElement) {
        observer.unobserve(textElement);
      }
    };
  }, []);

  return (
    <main>
      <section className="pageInfos" id="infos">
        <div className={`pageInfos__text ${isVisible ? 'animate' : ''}`} ref={textRef}>
          <h1>Bonjour et bienvenue</h1>
          <p>
            Je suis une développeuse web passionnée par la création d'expériences
            en ligne innovantes et fonctionnelles. Ma rigueur et mon souci du
            détail se reflètent dans chaque projet que j'entreprends.
            Bien que je sois en attente de mon diplôme, j'ai acquis une
            expérience pratique grâce à des projets académiques et des stages. Mon
            engagement envers l'apprentissage continu me permet de rester à jour
            avec les dernières tendances et technologies du domaine.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Infos;

