import React from 'react';
import './Topics.css';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const Topics = ({topic}) => {
    const {id, name, logo, total} = topic;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/quiz/${id}`);
    }
    return (
        <div className='col-md-3 col-sm-6'>
            <div className='topics-box'>
                <div>
                    <h4>{name}</h4>
                </div>
                <img src={logo} alt="" />
                <div className='d-flex justify-content-between quiz-bottom'>
                    <p>Total Quiz: {total}</p>
                    <button onClick={handleNavigate}>Start Quiz <ArrowRightIcon className="btn-icon"/></button>
                </div>
            </div>
        </div>
    );
};

export default Topics;