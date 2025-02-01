import React, { useEffect, useState} from "react";
import axios from "axios";

 function Result() {
    const [result, setResult] = useState(null);


    useEffect(() => {
        axios.get('https://ethereal-tame-gong.glitch.me/result/userId')
        .then(response => setResult(response.data))
        .catch(console.error(error));
    }, []);
    return(
        <div>
            <h1>Yay! Quiz Completed</h1>
            {result && (
                <p> You've answered {result.correctAnswer} out of {result.totalQuestions} correctly!</p>
            )}
        </div>
    )
 }
 export default Result;
 