import React from 'react';
import expert1 from '../../images/experts/expert-1.jpg';
import expert2 from '../../images/experts/expert-2.jpg';
import expert3 from '../../images/experts/expert-3.jpg';
import expert4 from '../../images/experts/expert-4.jpg';
import expert5 from '../../images/experts/expert-5.jpg';
import expert6 from '../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {

    const experts = [
        { name: "Jinn", id: 1, age: 34, img: expert1, des: "" },
        { name: "Finn", id: 2, age: 23, img: expert2, des: "" },
        { name: "Minn", id: 3, age: 55, img: expert3, des: "" },
        { name: "Kinn", id: 4, age: 12, img: expert4, des: "" },
        { name: "Bimm", id: 5, age: 44, img: expert5, des: "" },
        { name: "Fiiff", id: 6, age: 34, img: expert6, des: "" }

    ]

    return (
        <div>
            <h1 id='experts' className='text-center text-primary'>Our experts: </h1>

           <div className="expert-container row ">
           {
                experts.map(expert => <Expert
                key={expert.id}
                expert={expert}
                ></Expert>)
            }
           </div>
        </div>
    );
};

export default Experts;