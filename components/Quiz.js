import React, { Component } from "react"
import { View, Text } from 'react-native'
import QuizQuestion from './QuizQuestion'
import { connect } from 'react-redux'

class Quiz extends Component {
	state = {
	  displayedQuestion: 0,
	  displayAnswer: false,
	}

	showAnswer = () => {
	  this.setState(currState => ({
	    displayAnswer: !currState.displayAnswer,
	  }));
	}

  render() {
  	const { questions } = this.props
  	const { displayedQuestion, displayAnswer } = this.state
    const question = questions[displayedQuestion].question
    const answer = questions[displayedQuestion].answer
    return (
      <QuizQuestion question={question} answer={answer} displayAnswer={displayAnswer} showAnswer={this.showAnswer} />
    )
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
