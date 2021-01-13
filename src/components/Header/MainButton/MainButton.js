import React from 'react';
import {Link as LinkR} from "react-router-dom";
import './MainButton.scss'

const MainButton = ({btnText, classBtn}) => {
    return (
        <>
            <LinkR className={classBtn}>{btnText}</LinkR>
        </>
    );
};

export default MainButton;