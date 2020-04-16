import React, { Component } from "react"
import { View, Text } from 'react-native'

class Quiz extends Component {
  render() {
    const { title } = this.props.route.params
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <Text>Quiz View in {title}</Text>
      </View>
    )
  } 
}

export default Quiz
