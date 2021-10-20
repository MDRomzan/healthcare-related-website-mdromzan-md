import React from 'react';
import "./Doctor.css";
const Doctor = ({doctor}) => {
    const {specilist,name,img}=doctor;
    return (
      
           < div className = "col-md-6 col-lg-4 col-sm-12 text-center" >
               < div className = "shadow-lg py-3 rounded-5  " >
                <img className="rounded-circle w-50" src={img} alt="" />
                <h3>{name}</h3>
                <h4>Specialist:{specilist}</h4>
           
               </div>

           
           </div>
           
      
    );
};

export default Doctor;