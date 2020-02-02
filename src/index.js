import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MultipleChoiceQuiz from './Components/MultipleChoiceQuiz/MultipleChoiceQuiz'
import Results from './Components/Results/Results'
import Title from './Components/Title/Title'
import './styles.css';
import { quizzes } from './Components/API/API';

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
         counter: 0,
         questionID: 0,
         quizzes: quizzes,
         quizID:0,
         showResults:false,
        };
      };

     //Figure out counter issue. Seems to be a lifecycle issue that I'm having 
    nextQuestionHandler = (event) =>{
        
        event.target.classList.toggle('toggleNextQuestion')
        this.removeLIStyling();

        if(this.state.questionID===this.state.quizzes[this.state.quizID].questions.length-1) {
            this.setState({
                questionID:0
            });
            this.forceUpdate()
        }
        else if(this.state.questionID<this.state.quizzes[this.state.quizID].questions.length-1){
            this.setState({
                questionID:this.state.questionID+1
            })
        }     
    }

    resultsHandler = () =>{
        this.removeLIStyling();
        this.setState({
            quizID:this.state.quizID+1,
            questionID:0,
            showResults:true
        });
        this.forceUpdate();
    }

    removeLIStyling = () =>{
        const answerLIs = document.querySelectorAll('li');

        answerLIs.forEach(li=>{
            li.classList.remove('correctAnswer', 'wrongAnswer', 'noClicks')
        });
        
    }

    nextQuiz = () => {
        if(this.state.questionID===this.state.quizzes[this.state.quizID].questions.length-1) {
            this.setState({ 
                questionID:0,
                quizID:this.state.quizID+1
            });
            this.forceUpdate()
        }
    }
    

    render () {
       
      return (
        <div className="app">
            <Title 
                quizzes={this.state.quizzes} 
                quizID={this.state.quizID}/>
            <MultipleChoiceQuiz
                quizzes={this.state.quizzes}
                quizID={this.state.quizID}
                counter={this.state.counter}
                showResults={this.state.showResults}
                questionID={this.state.questionID}
                counterTallied={this.counterHandler}
                onNextQuestionClicked={this.nextQuestionHandler}/>
            
            {this.state.questionID===this.state.quizzes[this.state.quizID].questions.length-1?  
            <button
                id="resultButton"
                className="toggleNextQuestion"
                onClick={this.resultsHandler}>
                Results
            </button>: 
            <button
                id="resultButton"
                className="toggleNextQuestion noInteraction">
                Results
            </button>}
            {this.state.showResults? 
            <Results/>:null}
        </div>
    )};
};

ReactDOM.render(<App />, document.getElementById('root'));
