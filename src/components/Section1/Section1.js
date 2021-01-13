import React from 'react';
import "./Section1.scss"
import MainButton from "../Header/MainButton/MainButton";
import cloud1 from "../../assets/img/sky11.png";
import cloud2 from "../../assets/img/sky22.png";
import cloud3 from "../../assets/img/sky3.png";

const Section1 = ({
                      subTitle,
                      title,
                      pic,
                      classBtn,
                      btnText,
                      sectionTitleStyle,
                      sectionWrapStyle,
                      bricks
}) => {
    return (
        <>
            {/*<div className="section1_wrapper">*/}
            <div className={sectionWrapStyle}>
                <div className={sectionTitleStyle}>
                    <h3>{title}</h3>
                </div>
                {subTitle ? <div className="section1_subTitle"><p>{subTitle}</p></div> : null}
                <div className="section1_btn">
                    <MainButton btnText={btnText} classBtn={classBtn}/>
                </div>
                {pic ? pic: null}
                {bricks ? <div className='section1_bricks'/> : null}
                {/*{pic ? <div className="section1_pic">{pic}</div> : null}*/}
            </div>

            <div className="sky_pic"><img src={cloud1} alt="cloud" className="sky_pic_1"/></div>
            <div className="sky_pic"><img src={cloud2} alt="cloud" className="sky_pic_2"/></div>
            <div className="sky_pic"><img src={cloud3} alt="cloud" className="sky_pic_3"/></div>

        </>
    )
};

export default Section1;