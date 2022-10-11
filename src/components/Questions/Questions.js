import React, { useContext } from 'react';
import QuestionOption from '../QuestionOption/QuestionOption';
import './Questions.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import { answerContext } from '../Quiz/Quiz';

const Questions = ({questions, index}) => {
    const {options, question, correctAnswer} = questions;

    /* Load data by useContext for Quiz Summary
        Here is two state data and function loaded.
    */
    const [correctAns, setCorrectAns, inCorrectAns, setInCorrectAns ] =useContext(answerContext);
    
    /* Toasts for correct, incorrect or show answer.*/
    const correct = () => toast.success("Correct Answer", {
        position: "top-center",
    });
    const inCorrect = () => toast.error("Wrong Answer", {
        position: "top-center",
    });
    const ShowCorrect = () => toast.info(`Correct Answer: ${correctAnswer}`, {
        position: "top-center",
    });

    /** handle correct answer and set states for correct and incorrect answers */
    const handleCorrectAns = (answer) => {
        if(answer === correctAnswer){
            correct();
            setCorrectAns(correctAns + 1);
        }
        else{
            inCorrect();
            setInCorrectAns(inCorrectAns + 1);
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