import React from 'react';
import "./Service.css";

const Service = ({service}) => {
    const {img,name,dec}=service;
    return (
        <div className=" design-card col-md-6 col-lg-4 col-sm-12">
            <img className="cut-size" src={img} alt="" />
            <h3>{name}</h3>
            <p>{dec}</p>
            <button className="btn-details">View Details</button>
            
        </div>
    );
};

export default Service;