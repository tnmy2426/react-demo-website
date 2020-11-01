import React from 'react';
import './Services.css';
import Cards from './Cards';
import Data from './CardsData';

const Services = () => {
    return (
        <>
            <section className='container card_div'>
                <div className='row'>
                    {
                        Data.map((value, index) => {
                            return <Cards imgsrc={value.imgsrc} key={index} />
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Services
