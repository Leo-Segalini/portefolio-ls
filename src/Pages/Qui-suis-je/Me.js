import React, { useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import "./Me.css";
import css from "../../Photos/svg/css.svg";
import html from "../../Photos/svg/html.svg";
import js from "../../Photos/svg/js.svg";
import react from "../../Photos/svg/react.svg";
import php from "../../Photos/svg/php.svg";
import wordpress from "../../Photos/svg/wordpress.svg";
import strapi from "../../Photos/svg/strapi.svg";
import drupal from "../../Photos/svg/drupal.svg";
import docker from "../../Photos/svg/docker.svg";
import git from "../../Photos/svg/git.svg";
import gitlab from "../../Photos/svg/gitlab.svg";
import figma from "../../Photos/svg/figma.svg";
import down_arrow from "../../Photos/svg/down-arrow.svg";
import PopUp from "../../Components/Popup/PopUp";

function Me() {
  const resumeSectionRef = useRef(null);

  const scrollToResumeSection = () => {
    resumeSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="me_section_principale">
      <div className="me_section_secondaire">
        <h1>
          <Typewriter
            options={{
              strings: ["Parlons de moi !"],
              autoStart: true,
              pauseFor: 10000,
              loop: true,
              delay: 100,
            }}
          />
        </h1>
        <button onClick={scrollToResumeSection} className="btn_resume_go">
          <img src={down_arrow} alt="aroow down, svg, icon ,button" />
        </button>
      </div>
      <button
        onClick={openPopup}
        className="btn_projet_contact"
        ref={resumeSectionRef}
      >
        Contactez-moi
      </button>
      <div className="me_section_resume">
        <p>
          Un <span>caméléon</span> ! Je peux tout faire, j'estime qu'on n'a pas
          de limites à part nous-même. J'ai un parcours assez atypique, avec
          divers métiers. Mais ce que je retiens, c'est que j'apprends tous les
          jours. Aujourd'hui, j'ai une expérience variée et je désire la mettre
          à disposition pour aider les gens dans leurs projets. Originaire de
          Bordeaux, j'ai beaucoup voyagé et suis actuellement installé à la
          Réunion. Je continuerais de bouger dans le but d'apprendre toujours de
          nouvelles choses. L'informatique évolue tellement rapidement qu'il
          faut rester à l'écoute des évolutions pour vous permettre d'avoir les
          outils !
        </p>
      </div>

      <div className="me_section_parcours">
        <h2>
          <Typewriter
            options={{
              strings: ["Mon Parcour"],
              autoStart: true,
              pauseFor: 10000,
              loop: true,
              delay: 100,
            }}
          />
        </h2>
        <Fade direction="top">
          <p>
            Licence 2 de Biologie <br />
            Université de Bordeaux
          </p>
          <div className="me_separation"></div>
          <p>
            Weeding Planner <br />
            French Weeding Company
          </p>
          <div className="me_separation"></div>
          <p>
            Chef de Cuisine <br />
            Dupont Restauration
          </p>
          <div className="me_separation"></div>
          <p>
            Chef de partie <br />
            Clos D'Augusta
          </p>
          <div className="me_separation"></div>
          <p>
            Commerciale en assurance <br />
            SPB Family
          </p>
          <div className="me_separation"></div>
          <p>
            Recouvrement et indémnisation <br />
            SPB Family
          </p>
          <div className="me_separation"></div>
          <p>
            Conseiller en assurance <br />
            Ociane Matmut
          </p>
          <div className="me_separation"></div>
          <p>
            Formation Développeur Web <br />
            IFR Saint Pierre
          </p>
          <div className="me_separation"></div>
          <p>
            Développeur Web Freelance
            <br />
            Piton Saint Leu
          </p>
        </Fade>
      </div>

      <div className="me_section_competences">
        <h2>
          <Typewriter
            options={{
              strings: ["Mes Compétences"],
              autoStart: true,
              pauseFor: 10000,
              loop: true,
              delay: 100,
            }}
          />
        </h2>
        <p>
          J'ai eu la chance d'apprendre plusieurs languages informatique et de
          découvrir différents outils. Cela me permet aujourd'hui de vous
          proposer des solutions adaptées à vos besoins !
        </p>
        <Fade cascade damping={0.5}>
          <div className="me_section_card_competences">
            <img
              src={figma}
              alt="svg figma, logo figma, icon figma"
              title="figma"
            />
            <img src={html} alt="svg html, logo html, icon html" title="html" />
            <img src={css} alt="svg css, logo css, icon css" title="css" />
            <img src={js} alt="svg js, logo js, icon js" title="js" />
            <img
              src={react}
              alt="svg react, logo react, icon react"
              title="react"
            />
            <img src={php} alt="svg php, logo php, icon php" title="php" />
            <img
              src={wordpress}
              alt="svg wordpress, logo wordpress, icon wordpress"
              title="wordpress"
            />
            <img
              src={drupal}
              alt="svg drupal, logo drupal, icon drupal"
              title="drupal"
            />
            <img
              src={strapi}
              alt="svg strapi, logo strapi, icon strapi"
              title="strapi"
            />
            <img
              src={docker}
              alt="svg docker, logo docker, icon docker"
              title="docker"
            />
            <img src={git} alt="svg git, logo git, icon git" title="git" />
            <img
              src={gitlab}
              alt="svg gitlab, logo gitlab, icon gitlab"
              title="gitlab"
            />
          </div>
        </Fade>
      </div>
      {isPopupOpen && (
        <PopUp onClose={closePopup}>
          <p>
            Tel : <a href="tel:+33670963371">+33 6 70 96 33 71</a>
          </p>
          <p>
            Mail :{" "}
            <a href="mailto:leo.segalini@outlook.com">
              leo.segalini@outlook.com
            </a>
          </p>
        </PopUp>
      )}
    </div>
  );
}

export default Me;
