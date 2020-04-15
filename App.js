import React from 'react'
import { Text, View } from 'react-native'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="DECKS" component={DeckList} />
        <Tab.Screen name="NEW DECK" component={NewDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
