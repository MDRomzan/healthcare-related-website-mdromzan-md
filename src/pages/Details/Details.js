import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useDetails from '../../Hooks/useDetails';

import"./Details.css";
import { Link } from 'react-router-dom';

const Details = () => {
    const{serviceId}=useParams();
    console.log(serviceId);
    const {details}=useDetails();
    console.log(details)
    const match = details.find((detail) =>(detail.key===serviceId));
    
    // console.log(match)
    return (
        <div className="d-flex justify-content-center my-5 ">
            
            <div>
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={match?.img} /> 
            <Card.Body>
                 <Card.Title>{match?.name}</Card.Title> 
                <Card.Text>
                    {match?.dec}
                </Card.Text>
                <Link to="/home">
                <Button variant="go-some">Go To Home</Button>
                </Link>


            </Card.Body>
            </Card>
                    
            </div>

        </div>
    );
};

export default Details;