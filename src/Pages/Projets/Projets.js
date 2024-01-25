import React, { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Projets.css";
import site_film from "../../Photos/portefolio-pic/site-film.webp";
import site_RM from "../../Photos/portefolio-pic/site-R&M.webp";
import site_portefolio from "../../Photos/portefolio-pic/site-portefolio.webp";
import icon_ecran from "../../Photos/portefolio-pic/icon-ecran.webp";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import PopUp from "../../Components/Popup/PopUp";

function Projets() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="projet_section_principale">
      <div className="projet_section_secondaire">
        <div className="projet_section_tertiaire">
          <h1>
            <Typewriter
              options={{
                strings: ["Mes Projets"],
                autoStart: true,
                pauseFor: 10000,
                loop: true,
                delay: 100,
              }}
            />
          </h1>
          <Fade direction="left">
            <div className="projet_section_explications">
              <img
                src={icon_ecran}
                alt="différent ecran, illustration projet LS sur ecran différent, projets Léo Segalini"
              />
            </div>
          </Fade>
        </div>
      </div>
      <button onClick={openPopup} className="btn_projet_contact">
        Contactez-moi
      </button>
      <Fade direction="bottom">
        <p className="projet_explications_texte">
          Aujourd'hui, les utilisateurs sont sur toutes les plateformes, il est
          donc primordial d'avoir un <span>site</span> qui s'adapte au type
          d'écran. Chaque <span>site</span> que je conçois a pour but de
          répondre à cette demande. De même pour les{" "}
          <span>applications mobiles</span> qu'on peut télécharger sur Android
          ou IOS, l'objectif est que selon le téléphone sur lequel on est, l'
          <span>application</span> reste ergonomique et fluide d'utilisation.
        </p>
      </Fade>
      <div className="projet_carousel_section">
        <h2>2023</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="https://rick-et-morty-api.netlify.app/" target="blank">
              <img
                src={site_RM}
                alt="site web rick et morty, REACT, API, netlify, site Léo Segalini"
              />
            </Link>
            <h3>
              Site Web Rick & Morty, fait en REACT avec une connexion à une API.
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="https://api-movie-found.netlify.app/" target="blank">
              <img
                src={site_film}
                alt="site web film, HTML, CSS, JS, API, non responsive, Léo Segalini, LS"
              />
            </Link>
            <h3>
              Site Web pour trouver un film, fait en HTML, CSS et JS avec une
              connexion à une API.
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://leosegalini-portefolio.netlify.app/"
              target="blank"
            >
              <img
                src={site_portefolio}
                alt="site web portefolio, REACT, responsive, webp, Léo Segalini, LS"
              />
            </Link>
            <h3>Site portefolio, fait en REACT.</h3>
          </SwiperSlide>
        </Swiper>
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

export default Projets;
