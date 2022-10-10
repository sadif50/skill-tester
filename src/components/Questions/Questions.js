import React from 'react';
import QuestionOption from '../QuestionOption/QuestionOption';

const Questions = ({questions, index}) => {
    const {options, question, correctAnswer} = questions;
    return (
        <div>
            <div className="d-flex">
                <div>{index}. </div>
                <div dangerouslySetInnerHTML={{ __html: question }}></div>
            </div>
            {
                options.map((option, index) => <QuestionOption key={index} options={option}></QuestionOption>)
            }
        </div>
    );
};

export default Questions;