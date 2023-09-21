// import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/cards.css'

const Cards = (props) => {
    const profileDetails = props.details
    return (
        <Link to={`details/${profileDetails?.id}`}>
        <div className='hover:scale-105 ease-in-out duration-300 cursor-pointer text-center relative p-8 rounded-t-xl triangle-bottomRight text-white' style={{ backgroundImage: "linear-gradient(89deg, #17ACC1 0%, #11677D 36.46%, #0A2D4C 100%)" }}>
            <img src={profileDetails?.profile_picture} alt="" className='absolute -top-8 right-0 left-0 bottom-0 mx-auto w-16 h-16 rounded-full object-cover' />
            <h1 className='font-semibold pt-2 pb-3'>{profileDetails?.first_name}</h1>
            <p className='font-light truncate'>{profileDetails?.email}</p>
            <p className='font-light truncate'>{profileDetails?.job}</p>
        </div>
        </Link>
    );
};

export default Cards;