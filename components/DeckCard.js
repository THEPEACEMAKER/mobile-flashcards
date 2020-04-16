import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'  // gives access to the navigation object

function DeckCard (props) {
	const { title, num } = props
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={{margin: 10, padding: 10, borderColor: 'black', borderWidth: 1,}}
      onPress={() => navigation.navigate(
        'Deck',
        {
          title: title
        }
      )}
    >
      <View>
        <Text>{title}</Text>
        <Text>{`${num} cards`}</Text>
      </View>
    </TouchableOpacity>
  )
}

function mapStateToProps ({ decks }, { title }) {
  const deck = decks[title]

  return {
    deckTitle: deck.title,
    num: deck.questions.length,
  }
}

export default connect(mapStateToProps)(DeckCard)
