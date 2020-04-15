import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Constants from 'expo-constants'

function TheStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={{flex: 1}}>
      <TheStatusBar backgroundColor={'grey'} barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="DECKS" component={DeckList} />
          <Tab.Screen name="NEW DECK" component={NewDeck} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}
