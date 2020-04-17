import React, { Component } from "react"
import { View, Text } from 'react-native'
import QuizQuestion from './QuizQuestion'
import { connect } from 'react-redux'

class Quiz extends Component {
	state = {
	  displayedQuestion: 0,
	  displayAnswer: false,
	  answered: 0,
	  score: 0,
	}

	showAnswer = () => {
	  this.setState(currState => ({
	    displayAnswer: !currState.displayAnswer,
	  }))
	}

	addAnswer = (correct) => {
	  this.setState(currState => ({
	    answered: ++currState.answered,
	    score: correct ? ++currState.score : currState.score,
	    displayedQuestion: ++currState.displayedQuestion,
	    displayAnswer: false,
	  }))
	}

  render() {
  	const { questions } = this.props
  	const { displayedQuestion, displayAnswer, answered, score } = this.state
  	if(answered !== questions.length){
  		const question = questions[displayedQuestion].question
  		const answer = questions[displayedQuestion].answer
  		return (
  			<QuizQuestion
  	    	question={question}
  	    	answer={answer}
  	    	displayAnswer={displayAnswer}
  	    	showAnswer={this.showAnswer}
  	    	addAnswer={this.addAnswer}
  	    />
  	  )
  	}else{
  		return (
  			<Text>{`Your score : ${score} / ${answered}`}</Text>
  		)
  	}
  } 
}

function mapStateToProps ({ decks }, { route }) {
  const { title } = route.params
  const deck = decks[title]

  return {
    questions: deck.questions,
  }
}

export default connect(mapStateToProps)(Quiz)
