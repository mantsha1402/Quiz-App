import React, {useState, useEffect} from "react";
import axios from 'axios';
import QuizItem from './QuizItem';
import { useNavigate } from "react-router-dom";

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get('https://ethereal-tame-gong.glitch.me/questions')
        .then(response => setQuestions (response.data))
        .catch(error => console.error(error));
    }, []);

    const handleAnswer = (isCorrect) => {
        if (isCorrect){
            setScore(score + 1);

        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);

        }
        else{
            navigate('/result');
        }
    };

    return(
        <div>
            {questions.length > 0 &&(
                <QuizItem
                question={questions[currentQuestion]}
                handleAnswer={handleAnswer}
                />


            )}
        </div>
    );
}
export default Quiz;
