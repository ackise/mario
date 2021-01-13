import React, {useState, useEffect} from 'react';
import NavBar from './NavBar/NavBar'
import Logo from "./Logo/logo";
import LangBlock from "./Lang/LangBlock";
import Sidebar from "./SideBar/Sidebar";
import './Header.scss';

const Header = () => {
    const [headerColor, setHeaderColor] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setHeaderColor(true);
        } else {
            setHeaderColor(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [changeBackground])

    return (
        <div className={headerColor ? 'header_wrapper active' : 'header_wrapper'}>
            <div className="header_container">
                <Logo/>
                <NavBar/>
                <LangBlock style='language'/>
                <Sidebar/>
            </div>
        </div>
    );
};

export default Header;