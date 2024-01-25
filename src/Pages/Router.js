import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Projets from "./Projets/Projets";
import Me from "./Qui-suis-je/Me";
import Layout from "./Layout";
import MentionsLegales from "./MentionsLegales/MentionsLegales";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/accueil/*" element={<Home />} />
        <Route path="/mes_projets/*" element={<Projets />} />
        <Route path="/qui_suis_je/*" element={<Me />} />
        <Route path="/mentions_legales/*" element={<MentionsLegales />} />
      </Route>
    </Routes>
  );
}

export default Router;
