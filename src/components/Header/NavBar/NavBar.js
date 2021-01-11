import React, {useState, useEffect} from 'react';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import "./NavBar.scss";

const NavBar = ( ) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >=80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <div className='navbar_container'>
            <div className="nav menu">
            <LinkS className='nav menu_item'>Функционал</LinkS>
            <LinkS className='nav menu_item'>О Нас</LinkS>
            <LinkS className='nav menu_item'>Контакты</LinkS>
            </div>
            <div className='nav btn_container'>
               <LinkR className='nav header_link'>Bойти</LinkR>
               <LinkR className='nav header_link'>
                   <button className='nav_btn'>
                   Регистрация
                   </button>
               </LinkR>
            </div>

        </div>
    );
};

export default NavBar;