import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeService from '../HomeService/HomeService';
import "./HomeServices.css"
const HomeServices = () => {
    const[homeServices,setHomeServices]=useState([])
    
    useEffect(()=>{
        fetch("services.json")
        .then(res=>res.json())
        .then(data =>setHomeServices(data))
    },[])
    return (
        <div className="container box-size text-center my-5 ">
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