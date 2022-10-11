import React from 'react';
import './QuestionOption.css';

const QuestionOption = ({options, handleCorrectAns}) => {
    return (
        <div className='d-flex align-items-center quiz-option' onClick={()=>handleCorrectAns(options)}>
            <p className='radio-icon m-0'><span>&nbsp;</span></p>
            <div className='ms-2'>{options}</div>
        </div>
    );
};

export default QuestionOption;