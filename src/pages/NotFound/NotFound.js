import React from 'react';
import { Link } from 'react-router-dom';
import four from "../../images/download.jpeg"
const NotFound = () => {
    return (
        <div className="d-flex justify-content-center my-5 ">
            <div className="div">
                <img src={four} alt="" />
                 <h1 className="text-danger text-center">404</h1>
            <h2>This is a NotFound </h2>
            <Link to="/home"><button className="btn-button">Go to Home</button></Link>
            </div>
           
        </div>
    );
};

export default NotFound;