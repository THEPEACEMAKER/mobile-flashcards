import React from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'  // gives access to the navigation object,
// it cannot be used in class components though, to use it You must wrap your class component in a function component

function DeckCard (props) {
	const { title, num } = props
  const navigation = useNavigation()
  return (
    <View style={{width: '100%', alignItems: 'center',}}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => navigation.navigate(
          'Deck',
          {
            title: title,
          }
        )}
      >
        <View style={styles.item}>
          <Text style={styles.headerText}>{title}</Text>
          <Text style={{color: 'grey',}}>{num === 1 ? `${num} card` : `${num} cards`}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 20,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  headerText: {
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 20
  }
})

function mapStateToProps ({ decks }, { title }) {
  const deck = decks[title]

  return {
    title: deck.title,
    num: deck.questions.length,
  }
}

export default connect(mapStateToProps)(DeckCard)
