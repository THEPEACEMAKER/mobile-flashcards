import React, { Component } from "react"
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import DeckCard from './DeckCard'
import { setLocalNotification } from '../utils/helpers'

class DeckList extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    const { decksIds } = this.props
    return (
      <View>
        <FlatList
          style={{width: '100%',}}
          data={decksIds}
          renderItem={({ item }) => <DeckCard title={item} />}
          keyExtractor={item => item}
        />
      </View>
    )
  } 
}

function mapStateToProps ({ decks }) {
  const decksIds = Object.keys(decks)

  return {
    decksIds,
  }
}

export default connect(mapStateToProps)(DeckList)
