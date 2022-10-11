import React from 'react';

const QuestionOption = ({options, handleCorrectAns}) => {
    return (
        <div>
            <button onClick={()=>handleCorrectAns(options)}>{options}</button>
        </div>
    );
};

export default QuestionOption;