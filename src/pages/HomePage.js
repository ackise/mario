import React from 'react';
import Header from '../components/Header/Header'
import Section1 from "../components/Section1/Section1";
import SectionInfo from "../components/Section1/SectionInfo";
import Section1Image from "../components/Section1/Section1Image";


const HomePage = () => {
    return (
        <>
            {/*<Header/>*/}
            {/*<Section1*/}
            {/*    title={SectionInfo.section1.title}*/}
            {/*    btnText={SectionInfo.section1.btnText}*/}
            {/*    classBtn={SectionInfo.section1.classBtn}*/}
            {/*    sectionTitleStyle={SectionInfo.section1.sectionTitleStyle}*/}
            {/*    sectionWrapStyle={SectionInfo.section1.sectionWrapStyle1}*/}
            {/*/>*/}
            {/*<Section1 />*/}
            {/*<Section1 />*/}
            <Section1
                title={SectionInfo.section4.title}
                subTitle={SectionInfo.section4.subTitle}
                btnText={SectionInfo.section4.btnText}
                classBtn={SectionInfo.section4.classBtn}
                sectionTitleStyle={SectionInfo.section4.sectionTitleStyle}
                sectionWrapStyle={SectionInfo.section4.sectionWrapStyle}
                pic={<Section1Image />}
                bricks={true}
            />
            {/*<Section1Image />*/}
            {/*<IntroductinSection />*/}
        </>
    );
};

export default HomePage;