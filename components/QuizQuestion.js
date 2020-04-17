import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function QuizQuestion (props) {
    const { question, answer } = props

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <View style={{height: '50%', justifyContent: 'center', alignItems: 'center',}}>
          <Text style={[styles.headerText, {fontSize: 30,}]}>{question}</Text>
          <TouchableOpacity>
          <Text style={{color: 'red', textDecorationLine: 'underline'}}>Answer</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.AndroidBtn, {backgroundColor: '#28a745',}]}
        >
            <Text style={styles.submitBtnText}>Correct</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.AndroidBtn, {backgroundColor: '#dc3545',}]}
        >
            <Text style={styles.submitBtnText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
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
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '60%',
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
  },
})

export default QuizQuestion