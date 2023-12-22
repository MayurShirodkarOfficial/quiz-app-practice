import React, { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';
const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionsIndex = userAnswers.length;
    const quizIsComplete = activeQuestionsIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    });

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers}/>
    }


    return (
        <div id="quiz">
            <Question 
                key={activeQuestionsIndex}
                index={activeQuestionsIndex}
                onSelectAnswer = {handleSelectAnswer}
                onSkipAnswer ={handleSkipAnswer}
            />
        </div>
    )
}

export default Quiz