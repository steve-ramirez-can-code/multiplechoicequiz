import React from 'react';
import './Question.css'

const Question = (props) => {

    return ( 
        <h3 id="Question">
            {props.quizzes[props.quizID].questions[props.questionID].text}
        </h3>
        )
    }
export default Question