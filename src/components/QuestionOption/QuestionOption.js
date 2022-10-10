import React from 'react';

const QuestionOption = ({options}) => {
    return (
        <div>
            <button type='radio'>{options}</button>
        </div>
    );
};

export default QuestionOption;