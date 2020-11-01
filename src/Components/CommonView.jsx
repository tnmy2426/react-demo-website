import React from 'react';
import './CommonView.css';
import { NavLink } from 'react-router-dom';

const CommonView = (props) => {
    return (
        <>
            <section id='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12 flex_view'>
                            <h1 className='mt-2'>
                                {props.title}
                                <br />
                                <strong className="brand_name">{props.brandName}</strong>
                            </h1>
                            <h2 className='my-3'>{props.subtitle}</h2>
                            <div className='my-4'>
                                <NavLink to={props.link} className='getting_start_btn'>{props.btnTitle}</NavLink>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-12'>
                            <figure>
                                <img src={props.imgsrc} alt="homepage_pic" className='img-fluid animated' />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommonView
