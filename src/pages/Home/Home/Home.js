import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import HomeServices from '../HomeServices/HomeServices';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;