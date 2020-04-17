import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import Deck from './components/Deck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Constants from 'expo-constants'
import { createStackNavigator } from '@react-navigation/stack'
import { useHeaderHeight } from '@react-navigation/stack'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers';
import middleware from './middleware'

function TheStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tab = createMaterialTopTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="DeckList"
      tabBarOptions={{
      style: {
        height: useHeaderHeight(),
      }
    }}>
      <Tab.Screen name="DECKS" component={DeckList} />
      <Tab.Screen name="NEW DECK" component={NewDeck} />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()

function DecksStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerStatusBarHeight: 0,
      }}>
      <Stack.Screen name="DECKS" component={Tabs} options={{headerShown: false}} />
      <Stack.Screen name="Deck" component={Deck} options={({ route }) => ({ title: route.params.title })} />
      <Stack.Screen name="NewCard" component={NewCard} options={({ route }) => ({ title: `Add Card To ${route.params.title}` })} />
      <Stack.Screen name="Quiz" component={Quiz} options={({ route }) => ({ title: `${route.params.title} Quiz` })}  />
    </Stack.Navigator>
  )
}

const store=createStore(reducer, middleware)

export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <TheStatusBar backgroundColor={'grey'} barStyle="light-content" />
        <NavigationContainer>
          <DecksStack />
        </NavigationContainer>
      </View>
    </Provider>
  )
}
