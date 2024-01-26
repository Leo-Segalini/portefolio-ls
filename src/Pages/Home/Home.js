import React from "react";

import illus_pic from "../../Photos/svg/illus-pc.svg";
import stats_icon from "../../Photos/svg/stats-analytic.svg";
import security_icon from "../../Photos/svg/security_icon.svg";
import site_film from "../../Photos/portefolio-pic/site-film.webp";
import site_RM from "../../Photos/portefolio-pic/site-R&M.webp";
import site_portefolio from "../../Photos/portefolio-pic/site-portefolio.webp";
import "./Home.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <div className="home_section_principale">
      <div className="home_section_secondaire">
        <div className="home_section_title">
          <Fade cascade damping={2}>
            <h1>
              Hello ! Moi c'est <span>Léo Segalini</span> et je suis
            </h1>
            <h2> Développeur Web Freelance</h2>
          </Fade>
          <Link to="/qui_suis_je">
            <button className="btn_page_me">En savoir +</button>
          </Link>
        </div>
      </div>
      <Fade direction="left">
        <div className="home_description">
          <h2>
            Je <span>développe</span> des <span>sites</span> et des
            <span> applications</span> pour tout types de clients.
          </h2>
          <div className="home_separation"></div>
          <div className="home_description_explication">
            <h3>
              Créer son site internet, son application ou sa boutique en ligne,
              c'est un métier !
            </h3>
            <p>
              Hello ! Moi, c'est Léo et je suis Développeur Web full stack
              Freelance à la Réunion. Je travaille dans le monde entier. Mon
              Objectif est de vous trouver l'outil adapté pour votre site et
              votre besoin. <br />
              <br />
              Aujourd'hui beaucoup de sites son créer avec des outils pas
              adaptés et qui coûtent cher. Ce que je souhaite, c'est vous
              accompagner dans l'ensemble des étapes permettant la création de
              votre site ou application.
              <br />
              <br />
              Boutique en ligne, landing page, application mobile... De
              l'indépendant aux entreprises, je suis là pour vous aider à vous
              mettre en avant sur le web via un site de qualité.
            </p>
          </div>
        </div>
      </Fade>
      <Fade triggerOnce>
        <div className="btn_home_mid_me">
          <Link to="/qui_suis_je">
            <button className="btn_page_mid_me">En savoir +</button>
          </Link>
        </div>
      </Fade>
      <div className="home_section_service">
        <h2>
          <Typewriter
            options={{
              strings: ["Mes Services"],
              autoStart: true,
              pauseFor: 10000,
              loop: true,
              delay: 100,
            }}
          />
        </h2>
        <div className="home_section_card_service">
          <Fade direction="left">
            <div className="home_service_card">
              <img
                src={illus_pic}
                alt="illustation pc, illustration services"
              />
              <h3>
                <span>Site</span> Web et <span>Boutique</span> en ligne
              </h3>
              <p>
                De nos jours, un site web est un indispensable pour mettre en
                avant notre univers professionnel. Je suis là pour qu'ensemble,
                on puisse créer une plateforme qui vous correspond et qui soit
                adaptée à vos besoins.
              </p>
            </div>
          </Fade>
          <Fade direction="bottom">
            <div className="home_service_card">
              <img
                src={stats_icon}
                alt="illustration statistique, illutration services LS"
              />
              <h3>
                Analyse des <span>performances</span> du site
              </h3>
              <p>
                Un site, c'est bien, mais si les performances ne sont pas là
                alors votre visibilité aux yeux de vos clients sera nul. Un
                suivi régulier des besoins de vos clients est indispensable pour
                améliorer les performances de votre site et donc son
                référencement sur le web.
              </p>
            </div>
          </Fade>
          <Fade direction="right">
            <div className="home_service_card">
              <img
                src={security_icon}
                alt="illustration security_icon, security_icon LS"
              />
              <h3>
                <span>Securisation</span> des données client et des votres
              </h3>
              <p>
                Beaucoup de sites sont développés sans sécurité, et les données
                des clients sont un point clé. Il faut les protéger, c'est pour
                ça que je souhaite vous aider à mieux comprendre les enjeux de
                sécurité dans le domaine du web pour que vos clients aient
                confiance en vous.
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <div className="home_portefolio_section">
        <h2>
          <Typewriter
            options={{
              strings: ["Mon Portefolio"],
              autoStart: true,
              pauseFor: 10000,
              loop: true,
              delay: 100,
            }}
          />
        </h2>
        <div className="home_section_card_projets">
          <Link to="/mes_projets">
            <Fade direction="left">
              <img
                src={site_film}
                alt="site film perso, LS site film, netlify"
              />
            </Fade>
            <Fade direction="bottom">
              <img
                src={site_RM}
                alt="site Rick et Morty perso, LS site RM, netlify"
              />{" "}
            </Fade>
            <Fade direction="right">
              <img
                src={site_portefolio}
                alt="site portefolio perso, LS site portefolio, netlify"
              />{" "}
            </Fade>
          </Link>
        </div>
        <Link to="/mes_projets">
          <button className="btn_page_mid_me">En savoir +</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
