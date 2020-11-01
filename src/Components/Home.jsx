import React from 'react';
import CommonView from './CommonView';
import image from '../img/robot.png';

const Home = () => {
    return (
        <>
            <CommonView 
                title="Wellcome to our App"
                brandName="React Developers"
                subtitle="We are Web App Developers from Bangladesh"
                btnTitle="Get Started"
                imgsrc={image}
                link="/gallery"
            />
        </>
    )
}

export default Home
