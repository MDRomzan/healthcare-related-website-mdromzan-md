import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css";

const Service = ({service}) => {
    const {key,img,name,dec}=service;
    return (
        <div className=" design-card col-md-6 col-lg-4 col-sm-12">
            <img className="cut-size" src={img} alt="" />
            <h3>{name}</h3>
            <p>{dec}</p>
            <Link to={`/details/${key}`}>
            <button className="btn-details">View Details</button>
            </Link>
            
            
        </div>
    );
};

export default Service;