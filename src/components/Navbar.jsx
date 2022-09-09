import React, { useState } from 'react';
import img from '../assets/Union.png';

function Navbar() {
  return (
    <nav>
      <div className="container py-3 mx-3">
        <div className="brand">
          <span>
            Explore What <br /> Your Hospital Needs
          </span>
          <img src={img} alt="notification" className="notification-image" />
          {/* <span>Your Hospital Needs</span> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
