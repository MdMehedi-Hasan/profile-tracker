// import { useState } from 'react';
import axios from 'axios'

import Cards from "../Common/Cards";
import { useEffect, useState } from 'react';
import Header from './Header';

const Home = () => {
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        axios.get('https://api.slingacademy.com/v1/sample-data/users?offset=10&limit=20')
            .then(function (response) {
                setProfiles(response.data.users)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <section>
            <Header/>
            <div className="my-36 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-36 gap-x-10 px-10 lg:px-5 xl:px-0">
                {/* Slicing the response incase exit the 12 limit */}
                {profiles?.slice(0, 12).map((profile, index) => <Cards key={index} details={profile} />)}
            </div>
        </section>
    );
};

export default Home;