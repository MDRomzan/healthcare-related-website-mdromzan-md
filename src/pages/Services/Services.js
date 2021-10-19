import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch("allservices.json")
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])
    // console.log(services)
    return (
        <div className="container mt-5">
            <h1 className="text text-center">Our Medical Services</h1>
            <div className="row ms-3">
                {
                    services.map(service=><Service
                    service={service}
                    key={service.key}
                    >

                    </Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;