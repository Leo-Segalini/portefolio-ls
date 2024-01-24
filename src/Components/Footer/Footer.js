import React from "react";
import logo from "../../Photos/illustration/logo_blanc_sf.webp";
import facebook from '../../Photos/svg/facebook.svg';
import instagram from '../../Photos/svg/instagram.svg';
import github from '../../Photos/svg/github.svg';
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_section_principale">
      <div className="footer_section_secondaire">
        <div className="footer_section_gauche">
          <img
            src={logo}
            alt="logo_société, LS, logo_LS, Léo Segalini Web Developper Logo"
          />
          <div className="informations_contact">
            <h1 className="titre_contact">
              Construisons votre projet ensemble !
            </h1>
            <p>
              Tel :{" "} <a href="tel:+33670963371">+33 6 70 96 33 71</a>
            </p>
            <p>
              Mail :{" "}
              <a href="mailto:leo.segalini@outlook.com">
                leo.segalini@outlook.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer_section_droite">
          <div className="footer_reseaux">
            <img src={facebook} alt="logo_facebook, lien_facebook_LS, page_facebook_LS" />
            <img src={instagram} alt="logo_instagram, lien_instagram_LS, page_instagram_LS" />
            <a href="https://github.com/Leo-Segalini" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="logo_github, lien_github_LS, page_github_LS" />
            </a>
          </div>
          <div className="footer_mentions">
            <span>©2024-2026 Léo Segalini | Tous Droits Réservées | </span>
            <Link to="/mentions_legales">Mentions Légales |</Link>
            <Link to="/CGV"> CGV</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
