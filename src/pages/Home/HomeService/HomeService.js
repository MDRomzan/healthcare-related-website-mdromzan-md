import React from 'react';
import"./homeService.css"
const HomeService = ({homeService}) => {
    const{img,name,dec}=homeService;
    return (
        <div className=" col-md-6 col-lg-4 col-sm-12">
            <img className="cut-size" src={img} alt="" />
            <h3>{name}</h3>
            <p>{dec}</p>
            <button className="btn-details">View Details</button>
            
        </div>
    );
};

export default HomeService;