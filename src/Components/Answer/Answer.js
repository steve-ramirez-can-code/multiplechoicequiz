import React from 'react';
import './Answer.css'
  
const Answer = (props) =>{
    
    const randomizeQuestions = (arr) =>  arr.sort(()=> Math.random() - 0.5)
   
    var selectedAnswerHandler = (event) =>{
        var answerLIs = document.querySelectorAll('li');
        var nextButton = document.getElementById('nextQuestionButton');
        nextButton.classList.toggle('toggleNextQuestion')
        
        var resultButton = document.getElementById('resultButton');
        resultButton.classList.toggle('toggleNextQuestion')

        
        if(event.target.getAttribute('value')!==props.quizzes[props.quizID].questions[props.questionID].correctAnswer){
            answerLIs.forEach(li => {
                li.classList.add('noClicks')
            })
            event.target.classList.add('wrongAnswer');
            answerLIs.forEach(li => {
                if(li.innerText===props.quizzes[props.quizID].questions[props.questionID].correctAnswer){
                    return li.classList.add('correctAnswer')
                }
            })
        }
        else{
            event.target.classList.add('correctAnswer');
            answerLIs.forEach(li => {
                return li.classList.add('noClicks')
            })

        };
    }

    var allAnswersRandomized = randomizeQuestions((props.quizzes[props.quizID].questions[props.questionID].incorrectAnswers.concat(props.quizzes[props.quizID].questions[props.questionID].correctAnswer))).map((answer,index) =>{
        return ( 
        <li
            value={answer}
            className="answerOption"
            onClick={selectedAnswerHandler}
            key={index}>
            {answer}
        </li>
        )
    })
    return (

        <div>
            <ol type="A">
                {allAnswersRandomized}
            </ol>
            {props.questionID+1===props.quizzes[props.quizID].questions.length? 
                <button 
                onClick = {(event) => props.onNextQuestionClicked(event)}
                id="nextQuestionButton"
                className="noInteraction">Next Question
            </button>
                : <button 
                onClick = {(event) => props.onNextQuestionClicked(event)}
                id="nextQuestionButton"
                className="toggleNextQuestion">Next Question
            </button>
            
            }
        </div>
        //flesh out animations and spruce up css when possible
    );   
}

export default Answer