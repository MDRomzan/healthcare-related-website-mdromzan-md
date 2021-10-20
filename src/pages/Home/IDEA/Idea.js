import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import pic1 from "../../../images/pic1.jpeg"
import pic2 from "../../../images/pic2.jpeg"
import pic3 from "../../../images/pic3.jpeg"

const Idea = () => {
    return (
       <CardGroup className="text-center mx-5 rounded-3" >
  <Card >
    <Card.Img variant="top" src={pic1} />
    <Card.Body>
      <Card.Title> Neatual Maehies</Card.Title>
      <Card.Text>
          High Quality Medical Instrument with Competitive Price.China’ s 
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.{"'"}
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={pic2} />
    <Card.Body>
      <Card.Title>UltraSound Machines</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural technology, Solutions
        for various oxygen concentrators.No.1 Korean manufacture
        for Medical oxygen concentrator. 
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img className=" img-fluid" variant="top" src={pic3}/>
    <Card.Body>
      <Card.Title>Labortory Maehines</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
    );
};

export default Idea;