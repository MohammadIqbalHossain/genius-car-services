import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId}  = useParams();
    return (
        <div>
            <h1>Thi is service details: {serviceId}</h1>
            <button className='btn-primary'>Procced</button>
        </div>
    );
};

export default ServiceDetails;