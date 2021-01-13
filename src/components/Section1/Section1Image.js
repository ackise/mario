import React from 'react';
import Bitcoin from '../../assets/img/BitcoinPodium.svg';
import Ephir from '../../assets/img/EphirPodium.svg';

const Section1Image = () => {
    return (
        <div className="section1_pic_wrap">
            <img src={Bitcoin} alt="Bitcoin" className="section1_pic_bitcoin"/>
            <img src={Ephir} alt="Bitcoin" className="section1_pic_ephir"/>
        </div>
    );
};

export default Section1Image;