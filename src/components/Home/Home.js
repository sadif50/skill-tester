import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
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
            <div className='row'>
            {
                topics.map(topic => <Topics key={topic.id} topic={topic}></Topics>)
            }
            </div>
        </div>
        
    );
};

export default Home;