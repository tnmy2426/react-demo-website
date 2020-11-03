import React from 'react';
import gData from './GalleryData';
import ImageCard from './ImageCard';

const Gallery = () => {
    return (
        <>
            <section className='gallery_container'>
                <div className='container'>
                    <div className='row'>
                        {
                            gData.map((value, index) => {
                                return <ImageCard imgsrc={value.link} key={index} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
