import React, { Component } from "react"
import { View, Text } from 'react-native'
import QuizQuestion from './QuizQuestion'
import { connect } from 'react-redux'

class Quiz extends Component {
	state = {
	  displayedQuestion: 0,
	}

  render() {
  	const { questions } = this.props
  	const { displayedQuestion } = this.state
    const question = questions[displayedQuestion].question
    const answer = questions[displayedQuestion].answer
    return (
      <QuizQuestion question={question} answer={answer} />
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
