// import { useState } from 'react';
import axios from 'axios'

import Cards from "../Common/Cards";
import { useEffect, useState } from 'react';

const Home = () => {
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        axios.get('https://api.slingacademy.com/v1/sample-data/users')
            .then(function (response) {
                setProfiles(response.data.users)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <div className="my-36 container mx-auto grid grid-cols-4 gap-y-28 gap-x-16">
            {/* Slicing the response incase exit the 12 limit */}
            {profiles?.slice(0, 12).map((profile, index) => <Cards key={index} details={profile} />)}
        </div>
    );
};

export default Home;