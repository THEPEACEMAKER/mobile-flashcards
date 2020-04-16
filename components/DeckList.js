import React, { Component } from "react"
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/decks'
import DeckCard from './DeckCard'

class DeckList extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData()) // has access to the dispatch, because of the connect function
  }

  render() {
    const { decksIds } = this.props
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <FlatList
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
