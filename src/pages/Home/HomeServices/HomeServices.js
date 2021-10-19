import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const[homeServices,setHomeServices]=useState([])
    useEffect(()=>{
        fetch("services.json")
        .then(res=>res.json())
        .then(data =>setHomeServices(data))
    },[])
    return (
        <div className="container">
             <h1 className="text text-center">Our Medical Services</h1>
            <div className="row ms-3">
                {
                    homeServices.map(homeService=><HomeService
                    homeService={homeService}
                    key={homeService.key}
                    >

                    </HomeService>)
                }
            </div>
            
        </div>
    );
};

export default HomeServices;