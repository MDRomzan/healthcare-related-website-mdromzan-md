import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Extra from '../Extra/Extra';
import HomeServices from '../HomeServices/HomeServices';
import Idea from '../IDEA/Idea';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-center text ">Our Service Machince</h1>
            <Idea></Idea>
            <HomeServices></HomeServices>
            <Extra></Extra>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;