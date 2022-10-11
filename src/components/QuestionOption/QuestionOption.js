import React from 'react';
import './QuestionOption.css';

const QuestionOption = ({options, handleCorrectAns}) => {
    return (
        <label className='d-flex quiz-option' onClick={()=>handleCorrectAns(options)}>
            <input type="radio" name="option" />
            <div className='ms-2'>{options}</div>
        </label>
    );
};

export default QuestionOption;