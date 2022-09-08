import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import "../scss/index.scss";
import Categories from "./Categories";
import Products from "./Products";
import ScrollTop from "./ScrollTop";
import scrollreveal from "scrollreveal";

const  Index = () => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .services-container,
        .categories-container,
        .recommend-container,
        .choose-us-container,
        .products-container,
        .promo-container,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
  }, 1500);
  return (
    <div data-theme={theme} className="app">
      <ScrollTop />
      <Navbar />
      <Home />
      <Categories />
      <Products />
    </div>
  );
}

export default Index;
