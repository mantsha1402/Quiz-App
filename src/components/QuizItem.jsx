import React from "react";
function QuizItem({ question, handleAnswer }) {
    return(
        <div>
            <h2>{question.text}</h2>
            {question.options.map((option, index) => (
                <button key = {index} onClick={() => handleAnswer(option.isCorrect)}>
                    {option.text}
                </button>
            ))}
        </div>
    )
}
export default QuizItem;
