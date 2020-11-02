import React from 'react';
import gData from './GalleryData';
import ImageCard from './ImageCard';

const Gallery = () => {
    return (
        <>
            <section className='container gallery_div'>
                <div className='row'>
                    {
                        gData.map((value, index) => {
                            return <ImageCard imgsrc={value.link} key={index} />
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Gallery
