import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, img, des, _id} = service;
    const naviagte = useNavigate();

    const navigateToDetail = (id) => {
        naviagte(`/service/${id}`)
    }

    return (
        <div className='cart-container'>
            <img width="280px" src={img} alt="" />
            <h2>{name}</h2>
            <p>{des}</p>
            <button onClick={() => navigateToDetail(_id)} >Book: {name}</button>
        </div>
    );
};

export default Service;