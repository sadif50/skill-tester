import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const qiuzes = useLoaderData().data;
    const {total, name, logo, questions} = qiuzes;
    console.log(questions)
    return (
        <div>
            
        </div>
    );
};

export default Quiz;