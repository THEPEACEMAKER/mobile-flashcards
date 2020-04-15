import React, { Component } from "react"
import { View, Text, TouchableOpacity } from 'react-native'

class NewDeck extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <Text>NewDeck View</Text>
        <TouchableOpacity
          style={{margin: 10, padding: 10, borderColor: 'black', borderWidth: 1,}}
          onPress={() => console.log('get back to DeckList')}
        >
            <Text>Add New Deck</Text>
        </TouchableOpacity>
      </View>
    )
  } 
}

export default NewDeck
