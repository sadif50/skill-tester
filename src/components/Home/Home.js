import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div className='container'>
            <div className='home-banner'>
                <div className="banner-text text-center px-4">
                    <h2 className='mb-3 fw-bold'>
                    You can test your skills with <span className='font-italic'>Skills Tester.</span>
                    </h2>
                    <p>
                        The test is not official, it's just a nice way to see how much you know about bellow topics.
                    </p>
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