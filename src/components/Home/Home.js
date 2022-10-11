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
                    <h2>
                    You can test your skills with Skills Tester.
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