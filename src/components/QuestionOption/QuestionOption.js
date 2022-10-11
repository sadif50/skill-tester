import React from 'react';
import './QuestionOption.css';

const QuestionOption = ({options, handleCorrectAns}) => {
    return (
        <div className='d-flex align-items-center justify-content-start quiz-option' onClick={()=>handleCorrectAns(options)}>
            <div className='radio-icon me-2'><span>&nbsp;</span></div>
            <div>{options}</div>
        </div>
    );
};

export default QuestionOption;