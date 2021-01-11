import React from 'react';
import { Link } from 'react-router-dom';
import LogoPic from '../../../assets/img/mario-logo.svg';
import LogoName from '../../../assets/img/mario-logo-name.svg';
import "./Logo.scss"

const Logo = () => {
    return (
        <div className='logo_container'>
        <Link to="/" className='navbar_logo'>
            <img src={LogoPic} alt="Logo" className="navbar_logo_pic"/>
        </Link>
            <Link to="/" className='navbar_logo' >
                <img src={LogoName} alt="LogoName" className="navbar_logo_name"/>
            </Link>
        </div>
    );
};

export default Logo;