import React, { Component } from "react"
import { View, Text, TouchableOpacity } from 'react-native'

class Deck extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <Text>Deck View</Text>
        <TouchableOpacity
          style={{margin: 10, padding: 10, borderColor: 'black', borderWidth: 1,}}
          onPress={() => console.log('to deck 1')}
        >
            <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{margin: 10, padding: 10, borderColor: 'black', borderWidth: 1,}}
          onPress={() => console.log('to deck 1')}
        >
            <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  } 
}

export default Deck
