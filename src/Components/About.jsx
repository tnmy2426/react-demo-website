import React from 'react';
import CommonView from './CommonView';
import image from '../img/robot2.png';

const About = () => {
    return (
        <>
            <CommonView 
                title="Wellcome to About Page"
                brandName="React | React-Hook | React-Router-Dom"
                subtitle="Expert Developers [ Fullstack ]"
                btnTitle="About Us"
                imgsrc={image}
                link="/contact"
            />
        </>
    )
}

export default About
