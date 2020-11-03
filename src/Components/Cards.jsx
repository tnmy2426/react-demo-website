import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = (props) => {
    return (
        <>
            <div className='col-lg-3 col-md-4 col-10'>
                <div className="card my-4">
                    <img src={props.imgsrc} className="card-img-top img-fluid" alt="cards" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title.</p>
                        <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
