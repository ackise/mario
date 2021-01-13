import React, {useState, useEffect} from 'react';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import MenuItems from './MenuItems';
import MainButton from "../MainButton/MainButton";
import "./NavBar.scss";

const NavBar = ( ) => {
    // const [scrollNav, setScrollNav] = useState(false);
    //
    // const changeNav = () => {
    //     if(window.scrollY >=10) {
    //         setScrollNav(true)
    //     } else {
    //         setScrollNav(false)
    //     }
    // }
    //
    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav)
    // }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <div className='navbar_container'>
            <div className="nav menu">
                {MenuItems.map((item, index) => {
                    return (
                <LinkS key={index} className={item.className} to={item.url}>{item.title}</LinkS>
                    )
                })}
            </div>
            <div className='nav btn_container'>
               <LinkR className='nav menu_item'>Bойти</LinkR>
               {/*<LinkR className='nav header_btn'>Регистрация</LinkR>*/}
               <MainButton />
            </div>
        </div>
    );
};

export default NavBar;