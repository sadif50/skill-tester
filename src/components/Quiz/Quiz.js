import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css';

export const answerContext = createContext();

const Quiz = () => {
    const qiuzes = useLoaderData().data;
    const { total, name, logo, questions } = qiuzes;
    
    /** These two state declear for set correct and incorrect answer number Using Context API */
    const [correctAns, setCorrectAns] = useState(0);
    const [inCorrectAns, setInCorrectAns] = useState(0);

    return (
        <answerContext.Provider value={[correctAns, setCorrectAns, inCorrectAns, setInCorrectAns]}>
            <div className='container'>
                <div className='quiz-head mb-5'>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <img src={logo} alt="" />
                        <h1 className='me-5'>{name} Quiz</h1>
                        <p className='m-0'>Total Quiz: {total}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        {
                            questions.map((question, index) => <Questions key={question.id} index={index + 1} questions={question}></Questions>)
                        }
                    </div>
                    <div className="col-md-3 position-relative">
                        <div className='quiz-summery sticky-md-top'>
                            <h4 className='text-center'>Quiz Summary</h4>
                            <hr />
                            <p>Correct Answers: &nbsp; <strong className='text-success'>{correctAns}</strong></p>
                            <p>Wrong Answers: &nbsp; <strong className='text-danger'>{inCorrectAns}</strong></p>
                        </div>
                    </div>
                </div>

            </div>
        </answerContext.Provider>
    );
};

export default Quiz;