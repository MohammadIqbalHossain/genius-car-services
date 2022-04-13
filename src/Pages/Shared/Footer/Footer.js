import { buildQueries } from '@testing-library/react';
import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center mt-5'>
            <h4>Copyright © {year}</h4>
        </div>
    );
};

export default Footer;