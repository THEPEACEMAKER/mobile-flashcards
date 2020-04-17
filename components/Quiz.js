import React, { Component } from "react"
import { View, Text } from 'react-native'
import QuizQuestion from './QuizQuestion'

class Quiz extends Component {
  render() {
    const { title } = this.props.route.params
    const question = 'What is React?'
    const answer = 'A library for managing user interfaces'
    return (
      <QuizQuestion question={question} answer={answer} />
    )
  } 
}

export default Quiz
