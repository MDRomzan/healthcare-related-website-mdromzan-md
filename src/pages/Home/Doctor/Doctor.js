import React from 'react';
import "./Doctor.css";
const Doctor = ({doctor}) => {
    const {specilist,name,img}=doctor;
    return (
      
           <div className="col-md-6 col-lg-4 col-sm-12">
            <img src={img} alt="" />
           <h3>{name}</h3>
           <h4>Specialist:{specilist}</h4>
           <div className="d-flex justify-content-evenly  ">

           </div>
           
           </div>
           
      
    );
};

export default Doctor;