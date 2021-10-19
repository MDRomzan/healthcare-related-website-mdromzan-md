import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Extra from '../Extra/Extra';
import HomeServices from '../HomeServices/HomeServices';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Extra></Extra>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;