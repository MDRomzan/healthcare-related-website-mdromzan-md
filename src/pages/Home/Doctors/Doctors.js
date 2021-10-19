import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Doctor from '../Doctor/Doctor';
import "./Doctors.css"
const Doctors = () => {
    const [doctors,setDoctor]=useState([])
    useEffect(() => {
        fetch("doctor.json")
        .then(res =>res.json())
        .then(data =>setDoctor(data))
    }, [])


    return (

        
        <div>
            <div className="container">
                 <h1 className="text-center text">Our Specialist Doctors</h1>
                 <div className="row">
                     {
                  doctors.map(doctor=><Doctor
                  doctor={doctor}
                  key={doctor.key}
                  >

                  </Doctor>)  
                }
                 </div>
               
            </div>
          
        </div>
    );
};

export default Doctors;