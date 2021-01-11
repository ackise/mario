import React from 'react';
import NavBar from './NavBar/NavBar'
import Logo from "./Logo/logo";
import LangBlock from "./Lang/LangBlock";
// import Sidebar from "./SideBar/Sidebar";
import './Header.scss';

const Header = () => {

    return (
        <div className='header_wrapper'>
        <div className="header_container">
            <Logo />
            <NavBar/>
            <LangBlock style='language'/>
            {/*<Sidebar/>*/}
        </div>
        </div>

    );
};

export default Header;