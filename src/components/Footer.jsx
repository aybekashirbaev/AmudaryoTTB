import React from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <div class="first">
        <div class="logo">
          <img src={Logo} alt="" /><Link href="/home" class="logo">AmudaryoTTB</Link>
        </div>
        <div class="networks">
          <a href=""><i class="fa-brands fa-telegram"></i></a>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      <p>Created by Ashirbaev Aybek</p>
    </div>
  );
};

export default Footer;