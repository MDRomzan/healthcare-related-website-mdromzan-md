import React from 'react';
import "./Extra.css"
import female from "../../../images/female1.png"
const Extra = () => {
    return (
        <div>
           <div className=" container row d-flex justify-content-center ms-5 ">
               <div className="col-lg-8 col-sm-12">
                    <img className="size-dom" src={female} alt="" />
               </div>
               <div className="col-lg-4 col-sm-12">
                   <h1>Best Service Medical</h1>
                   <p className="">Hospital, an institution that is built, staffed, and  of the sick and the injured; and for their housing during this process. </p>
               </div>
               </div> 
        </div>
    );
};

export default Extra;