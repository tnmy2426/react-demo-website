import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = (props) => {
    return (
        <>
            <div className='col-lg-3 col-md-4 col-10'>
                <div class="card my-4">
                    <img src={props.imgsrc} class="card-img-top img-fluid" alt="cards" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title.</p>
                        <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
