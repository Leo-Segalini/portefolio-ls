import React, { useEffect, useState } from "react";
import logo from "../../Photos/illustration/logo_blanc_sf.webp";
import burgerMenuIcon from "../../Photos/svg/burger_menu.svg";
import closeBtnIcon from "../../Photos/svg/close_btn.svg";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMenuToggle = () => {
      const navSectionLink = document.querySelector(".nav_section_link");
      const burger_menu_LS = document.querySelector(".burger_menu_LS");

      if (navSectionLink) {
        if (isMenuClicked) {
          navSectionLink.classList.add("open");
          burger_menu_LS.classList.add("open");
        } else {
          navSectionLink.classList.remove("open");
          burger_menu_LS.classList.remove("open");
        }
      }
    };

    handleMenuToggle();
  }, [isMenuClicked]);

  const closeMenu = () => {
    setIsMenuClicked(false);
  };

  const navSectionPrincipale = isScrolled
    ? "nav_section_principale nav-scroll"
    : "nav_section_principale";

  return (
    <div className={navSectionPrincipale}>
      <div className="nav_section_secondaire">
        <div className="nav_section_gauche">
          <img
            src={logo}
            alt="logo_société, LS, logo_LS, Léo Segalini Web Developper Logo"
          />
        </div>
        <div className="nav_section_droite">
          <button
            onClick={() => setIsMenuClicked(!isMenuClicked)}
            className="burger_menu_LS"
            aria-label="burger_menu_LS"
          >
            {isMenuClicked ? (
              <img
                src={closeBtnIcon}
                alt="close_btn, croix_pour_fermer, LS_close"
              />
            ) : (
              <img
                src={burgerMenuIcon}
                alt="menu_burger_LS, burger_menu, open"
              />
            )}
          </button>
          <div className="nav_section_link">
            <Link to="/accueil" onClick={closeMenu}>
              Accueil
            </Link>
            <Link to="/qui_suis_je" onClick={closeMenu}>
              Me Connaitre
            </Link>
            <Link to="/mes_projets" onClick={closeMenu}>
              Mes projets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
