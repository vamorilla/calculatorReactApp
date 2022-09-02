import React from "react";
import vmLogo from '../images/logoVM.png';
import '../hojas-estilos/Logo.css';

const Logo = () => (
    <img
          src={vmLogo}
          className="logo"
          alt="logo" />
);

export default Logo;