// state = {
//      questionBank: [...quizzes].map(quiz => {
//          return quiz.questions.map(question =>{
//              return {
//                 title: quiz.title, 
//                 questions:[...quiz.questions],
//                 allAnswers: question.incorrectAnswers.concat(question.correctAnswer)
//                     }
//                 })
//             }), 
//     quizzes: quizzes, 
//     correctAnswers: 0,
//     wrongAnswerClicked:false,
//     correctAnswerClicked:false
// };
////////////
// selectedAnswerHandler = (event, answer,correctAnswer) =>{
       
//     console.log('let\s try and figure this out and here is the event: ', event)

//     if(answer === correctAnswer){
//         console.log('this is correct!')
//         console.log(event) 
//         this.setState({
//             correctAnswerClicked:true
//         })
//     }
//     else{
//         console.log('incorrect answer', event.target)
        
//     }

// }
//////////
{/* 
    <div>
        {this.state.quizzes[1].questions.map((question, index) =>{
            console.log('this is question: ', question)
            return (
                <div key = {index + 1} className="questionContainer">
                <h3>{question.text}</h3>
                <ol type="A">
                    {(question.incorrectAnswers.concat(question.correctAnswer))
                        .sort(()=> Math.random() - 0.5)
                        .map((answer, index) =>{
                        console.log('this is the answer in the concat array',answer)
                            return(
                        <li 
                            onClick= {(event)=>{this.selectedAnswerHandler(event, answer, question.correctAnswer)}}
                            className= {this.state.correctAnswerClicked? "correctAnswer": "incorrectAnswer"}
                            value={answer}
                            key={index}>
                                {answer}
                        </li>)
                        })
                    }
                </ol>
                </div>
            )
        })}
    </div> */}


    ////////

     {/* <ol type="A">
        {randomizeQuestions((question.incorrectAnswers.concat(question.correctAnswer)))
            .map((answer, index) =>{
            console.log('this is the answer in the concat array',answer)
                return(
            <li 
                onClick= {(event)=>{props.selectedAnswerHandler(event, answer, question.correctAnswer)}}
                // className= {this.state.correctAnswerClicked? "correctAnswer": "incorrectAnswer"}
                value={answer}
                key={index}>
                    {answer}
            </li>)
            })
        }
    </ol> */}