import React, { Component } from "react"
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions/decks'

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  handleChange = (name, text) => {
    this.setState({[name]: text});
  }

  submit = () => {
    const { question, answer } = this.state
    const { title } = this.props.route.params

    // Update Redux
    this.props.dispatch(addCard(title, question, answer))

    this.setState(() => ({ question: '', answer: '' })) // reset the state

    // Navigate to parent deck

    // Save to "DB" -> AsyncStorage
  }

  render() {
    const { title } = this.props.route.params
    const { question, answer } = this.state
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
          <TextInput
            style={[styles.input, {margin: 0,}]}
            placeholder="The Question"
            value={question}
            onChangeText={text => this.handleChange('question', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="The Answer"
            value={answer}
            onChangeText={text => this.handleChange('answer', text)}
          />
          <TouchableOpacity
            disabled={question === '' || answer === '' }
            onPress={this.submit}
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

export default connect()(NewCard)
