import React, { Component } from "react"
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class NewCard extends Component {
  render() {
    const { title } = this.props.route.params
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
          <TextInput
            style={[styles.input, {margin: 0,}]}
            placeholder="The Question"
          />
          <TextInput
            style={styles.input}
            placeholder="The Answer"
          />
          <TouchableOpacity
            style={[styles.AndroidBtn, {backgroundColor: 'black',}]}
          >
              <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
      </View>
    )
  } 
}

const styles = StyleSheet.create({
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

export default NewCard
