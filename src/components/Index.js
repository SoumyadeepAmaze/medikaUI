import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Box from '@mui/material/Box';
import Home from "./Home";
import "../scss/index.scss";
import Categories from "./Categories";
import Products from "./Products";
import ScrollTop from "./ScrollTop";
import scrollreveal from "scrollreveal";
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Paper from '@mui/material/Paper';
import home from '../assets/HomeIcon.png'
import chatIcon from '../assets/ChatIcon.png'
import cart from '../assets/CartIcon.png'
import wishlist from '../assets/WishlistIcon.png'
import profile from '../assets/ProfileIcon.png'

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
        .products-container,
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
      <Box>
      <CssBaseline />
      <ScrollTop />
      <Navbar />
      <Home />
      <Categories />
      <Products />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
        >
          <BottomNavigationAction icon={<img src={home} alt='home'/>} />
          <BottomNavigationAction icon={<img src={chatIcon} alt='chatIcon'/>} />
          <BottomNavigationAction icon={<img src={cart} alt='cart'/>} />
          <BottomNavigationAction icon={<img src={wishlist} alt='wishlist'/>} />
          <BottomNavigationAction icon={<img src={profile} alt='profile'/>} />
        </BottomNavigation>
      </Paper>
      </Box>
    </div>
  );
}

export default Index;
