import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css';

const Quiz = () => {
    const qiuzes = useLoaderData().data;
    const {total, name, logo, questions} = qiuzes;
    console.log(questions)
    return (
        <div className='container'>
            <div className='quiz-head'>
                <div className='text-center'>
                    <img src={logo} alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <h1 className='me-5'>{name}</h1>
                    <p className='m-0'>Total Quiz: {total}</p>
                </div>
            </div>
            {
                questions.map((question, index) => <Questions key={question.id} index={index+1} questions={question}></Questions>)
            }
        </div>
    );
};

export default Quiz;