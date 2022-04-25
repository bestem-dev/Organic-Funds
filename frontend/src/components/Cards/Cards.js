import Card from './Card';
import Imagenes3 from './Imagenes3';
import React from 'react';
import "./Card.css";
import {Link} from 'react-router-dom';


function Cards (){

    return(
    <>
    <div className='title__card'>
    <h1>Product</h1>
    </div>
    <section className="card__content">
        <div className='espacio'>
    <p><strong>Tokedu:</strong><span> descentralized education</span></p>
    <div className='espacio2'>
    <p><strong>Funded: 28</strong>/100 ETH</p>
    </div>
    </div>
    <img id="img4"src={Imagenes3.img3} />
    <Link to="/contenido">
    <button id="button">Know Me</button></Link>
    </section>
    </>
    )

}

export default Cards