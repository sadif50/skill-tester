import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div className='container'>
            <div className='home-banner'>
                <div className="banner-text">
                    Hello 
                </div>
            </div>
        </div>
        
    );
};

export default Home;