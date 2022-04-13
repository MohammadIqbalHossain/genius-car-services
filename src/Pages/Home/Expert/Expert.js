import React from 'react';

const Expert = ({ expert }) => {
    const { name, age, img, des } = expert;
    return (
        <div class="card col-sm-12 col-md-6 col-lg-4 g-5 mx-auto" style={{ width: "300px" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div  className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellendus saepe impedit, consectetur nostrum eius at fuga eligendi deserunt</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Expert; 

