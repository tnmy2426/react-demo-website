import React from 'react'

const ImageCard = (props) => {
    return (
        <>
            <div className='col-lg-3 col-md-4 col-10'>
                <div className="card my-4">
                    <img src={props.imgsrc} class="card-img-top img-fluid" alt="cards" />
                    <div className="card-body">
                        <p className="card-text text-center">Subtitle Here</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageCard
