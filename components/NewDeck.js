import React, { Component } from "react"
import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'

class NewDeck extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{flex: 1, alignItems: 'center',height: '100%'}}
      >
        <View style={{flex: 1, justifyContent: 'flex-end', width: '100%', alignItems: 'center', paddingBottom: '30%'}}>
          <Text style={[styles.headerText, {fontSize: 40}]}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.input}
            placeholder="New Deck"
          />
          <TouchableOpacity
            style={[styles.AndroidBtn, {backgroundColor: 'black',}]}
          >
              <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  } 
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
  AndroidBtn: {
    backgroundColor: 'white',
    padding: 15,
    paddingLeft: 60,
    paddingRight: 60,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
  },
  input: {
    width: '90%',
    backgroundColor: 'white',
    margin: 30,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 10,
  }
})

export default NewDeck
