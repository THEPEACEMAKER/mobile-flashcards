import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function QuizScore (props) {
  const { score, answered, resetQuiz, title } = props
  const navigation = useNavigation()

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
      <View style={{height: '50%', justifyContent: 'center', alignItems: 'center',}}>
        <Text>Quiz Complete</Text>
        <Text style={[styles.headerText, {color: '#dc3545',}]}>{`${score} / ${answered}`}</Text>
      </View>
      <TouchableOpacity
        onPress={resetQuiz}
        style={[styles.AndroidBtn, {backgroundColor: 'black',}]}
      >
          <Text style={styles.submitBtnText}>Restart Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(
          'Deck',
          {
            title: title,
          }
        )}
        style={[styles.AndroidBtn]}
      >
          <Text style={[styles.submitBtnText, {color: 'black'}]}>Back To Deck</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 50,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
  AndroidBtn: {
    backgroundColor: 'white',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '60%',
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
})

export default QuizScore
