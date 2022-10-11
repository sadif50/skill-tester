import React from 'react';
import QuestionOption from '../QuestionOption/QuestionOption';

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
        <div>
            <div className="d-flex">
                <div>{index}. </div>
                <div dangerouslySetInnerHTML={{ __html: question }}></div>
            </div>
            {
                options.map((option, index) => <QuestionOption 
                key={index} 
                options={option}
                handleCorrectAns = {handleCorrectAns}
                ></QuestionOption>)
            }
        </div>
    );
};

export default Questions;