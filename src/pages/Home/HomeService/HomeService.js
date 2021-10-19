import React from 'react';
import { Link } from 'react-router-dom';
import"./homeService.css"
const HomeService = ({homeService}) => {
    const{key,img,name,dec}=homeService;
    return (
        <div className=" col-md-6 col-lg-4 col-sm-12">
            <img className="cut-size" src={img} alt="" />
            <h3>{name}</h3>
            <p>{dec}</p>
            <Link to={`/details/${key}`}>
                <button className="btn-details">View Details</button>
            </Link>
            
            
        </div>
    );
};

export default HomeService;