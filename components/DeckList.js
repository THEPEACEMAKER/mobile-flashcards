import React, { Component } from "react"
import { View, Text, TouchableOpacity } from 'react-native'

class DeckList extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <Text>DeckList View</Text>
        <TouchableOpacity
          style={{margin: 10, padding: 10, borderColor: 'black', borderWidth: 1,}}
          onPress={() => navigation.navigate(
            'Deck',
            {
              title: 'The First Deck'
            }
          )}
        >
            <Text>Deck 1</Text>
        </TouchableOpacity>
      </View>
    )
  } 
}

export default DeckList
