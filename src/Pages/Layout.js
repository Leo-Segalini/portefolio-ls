import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Naviguation/Nav";
import Footer from "../Components/Footer/Footer";

export default function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
