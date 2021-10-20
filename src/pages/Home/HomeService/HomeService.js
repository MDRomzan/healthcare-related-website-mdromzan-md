import React from 'react';
import { Link } from 'react-router-dom';
import"./homeService.css"
const HomeService = ({homeService}) => {
    const{key,img,name,dec}=homeService;
    return (
        
        <div className=" col-md-6 col-lg-4 col-sm-12 my-4 shadow-lg ">
            <div className="m-2 p-2">
            <img className="cut-size  d-flex mx-auto" src={img} alt="" />
            <h3>{name}</h3>
            <p>{dec.slice(0,100)}</p>
            <Link to={`/details/${key}`}>
            <button className="btn-details ">View Details</button>
            </Link>
            </div>
        </div>

    );
};

export default HomeService;