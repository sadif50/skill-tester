import React from 'react';
import './Topics.css';

const Topics = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div className='col-md-3 col-sm-6'>
            <div className='topics-box'>
                <div>
                    <h4>{name}</h4>
                </div>
                <img src={logo} alt="" />
                <div className='d-flex justify-content-between quiz-bottom'>
                    <p>Total Quiz: {total}</p>
                    <button>Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Topics;