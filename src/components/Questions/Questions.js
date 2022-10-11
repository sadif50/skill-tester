import React from 'react';
import QuestionOption from '../QuestionOption/QuestionOption';
import './Questions.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid';

const Questions = ({questions, index}) => {
    const {options, question, correctAnswer} = questions;

    const correct = () => toast.success("Correct Answer", {
        position: "top-center",
    });
    const inCorrect = () => toast.error("Wrong Answer", {
        position: "top-center",
    });
    const ShowCorrect = () => toast.info(`Correct Answer: ${correctAnswer}`, {
        position: "top-center",
    });
    const handleCorrectAns = (answer) => {
        if(answer === correctAnswer){
            correct();
        }
        else{
            inCorrect();
        }
    }
    return (
        <div className='quiz-question'>
            <div className='d-flex justify-content-between'>
                <div className="d-flex fw-bold">
                    <div className='me-2'>{index}. </div>
                    <div dangerouslySetInnerHTML={{ __html: question }}></div>
                </div>
                <div className='show-correct-answer' onClick={ShowCorrect}>
                    <EyeIcon></EyeIcon>
                </div>
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
            <ToastContainer />
        </div>
    );
};

export default Questions;