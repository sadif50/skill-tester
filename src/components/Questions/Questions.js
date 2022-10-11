import React from 'react';
import QuestionOption from '../QuestionOption/QuestionOption';
import './Questions.css';

const Questions = ({questions, index}) => {
    const {options, question, correctAnswer} = questions;
    const handleCorrectAns = (answer) => {
        if(answer === correctAnswer){
            alert('correct');
        }
        else{
            alert('Not Correct')
        }
    }
    return (
        <div className='quiz-question'>
            <div className="d-flex fw-bold">
                <div className='me-2'>{index}. </div>
                <div dangerouslySetInnerHTML={{ __html: question }}></div>
            </div>
            <div className='quiz-options-container'>
            {
                options.map((option, index) => <QuestionOption 
                key={index} 
                options={option}
                handleCorrectAns = {handleCorrectAns}
                ></QuestionOption>)
            }
            </div>
        </div>
    );
};

export default Questions;