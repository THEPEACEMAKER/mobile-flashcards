import React, { Component } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

function Deck (props) {
    const { title, num } = props
    const navigation = useNavigation()
    return (
      <View style={{flex: 1, alignItems: 'center',}}>
        <View style={{height: '65%', justifyContent: 'center', alignItems: 'center',}}>
          <Text style={[styles.headerText, {fontSize: 50,}]}>{title}</Text>
          <Text style={{color: 'grey',}}>{num === 1 ? `${num} card` : `${num} cards`}</Text>
        </View>
        <TouchableOpacity
          style={styles.AndroidBtn}
          onPress={() => navigation.navigate(
            'NewCard',
            {
              title,
            }
          )}
        >
            <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.AndroidBtn, {backgroundColor: 'black',}]}
          onPress={() => navigation.navigate(
            'Quiz',
            {
              title,
            }
          )}
        >
            <Text style={{color: 'white',}}>Start Quiz</Text>
        </TouchableOpacity>
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
  },
  AndroidBtn: {
    backgroundColor: 'white',
    padding: 15,
    paddingLeft: 60,
    paddingRight: 60,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
})

function mapStateToProps ({ decks }, { route }) {
  const { title } = route.params
  const deck = decks[title]

  return {
    title: deck.title,
    num: deck.questions.length,
  }
}

export default connect(mapStateToProps)(Deck)
