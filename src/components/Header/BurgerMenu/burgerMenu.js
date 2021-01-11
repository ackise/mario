import React, {useState} from 'react';
import "./BurgerMenu.css";

const BurgerMenu = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='burger_icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
    );
};

export default BurgerMenu;