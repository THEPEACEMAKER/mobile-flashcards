import React, { Component } from "react"
import { View, Text, TouchableOpacity } from 'react-native'

class DeckList extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <Text>DeckList View</Text>
        <TouchableOpacity
          style={{margin: 10, padding: 10, borderColor: 'black', borderWidth: 1,}}
          onPress={() => console.log('go to deck 1')}
        >
            <Text>Deck 1</Text>
        </TouchableOpacity>
      </View>
    )
  } 
}

export default DeckList
