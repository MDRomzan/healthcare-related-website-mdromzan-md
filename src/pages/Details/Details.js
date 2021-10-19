import React from 'react';
import { useParams } from 'react-router';
import"./Details.css";

const Details = () => {
    const{serviceId}=useParams();
    console.log(serviceId);
    return (
        <div>
            <div>
                <h1 className="detail">This is details:{serviceId} </h1> 
                <p className=" text text-center">Service is loading......</p>
            </div>
           
        </div>
    );
};

export default Details;