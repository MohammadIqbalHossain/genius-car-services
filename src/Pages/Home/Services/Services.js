import React, { useEffect, useState } from 'react';
import Experts from '../Experts/Experts';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [service, setService] = useState([])

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (

        <div>

            <h1 className='text-center'  id='service'>Our services</h1>

            <div className='services-container'>
                {
                    service.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <Experts></Experts>
        </div>
    );
};

export default Services;


