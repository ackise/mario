import { Divider } from '@material-ui/core'
import React from 'react'
import Logo from '../Logo/logo'
import './Sidebar.scss'
import { slide as Menu } from 'react-burger-menu';
import LangBlockDesk from '../Lang/LangBlock'
import {DomainName} from "../../../config";



const Sidebar = () => {
    return (
        <div id="outer-container">
        <Menu left pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={ '278px'}>
            <Logo />
            <Divider/>
            <a className='menu-item' href='#'>Функционал</a>
            <a className='menu-item' href='#'>О нас</a>
            <a className='menu-item' href='#'>Контакты</a>
            <Divider />
            <a className='menu-item' href={`${DomainName}/sign-in`}>Войти</a>
            <a className='menu-item' href={`${DomainName}/sign-up`}>Регистрация</a>
            <Divider />
            <LangBlockDesk style='language' selectStyle={true}/>
        </Menu>
        </div>

    )
}
export default Sidebar