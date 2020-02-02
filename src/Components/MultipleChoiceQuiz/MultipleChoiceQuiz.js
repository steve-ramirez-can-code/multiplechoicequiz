import React from 'react';
import './MultipleChoiceQuiz.css';
import Question from '../Question/Question';
import Answer from '../Answer/Answer'

 const MultipleChoiceQuiz = (props) => {

    return(
            <div>
                <Question 
                    quizzes={props.quizzes} 
                    quizID={props.quizID} 
                    questionID={props.questionID}/>
                <Answer 
                    quizzes={props.quizzes} 
                    quizID={props.quizID}
                    counter={props.counter} 
                    questionID={props.questionID}
                    counterTallied={props.counterTallied}
                    onNextQuestionClicked={(event)=> props.onNextQuestionClicked(event)}/>
            </div>

        
    )};
//see if there's a more elegant way to go about manipulting elements
export default MultipleChoiceQuiz