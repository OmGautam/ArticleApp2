import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home'
import PopularMovieScreen from './screens/Popular'
import ReccomendedMovieScreen from './screens/Reccomendation'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs' 
import { RFValue } from 'react-native-responsive-fontsize';
import { render } from 'react-dom';
import Transitioning from "react-native-reanimated"


export default function App() {
  return <AppContainer/>

}

const AppTopNavigation = createMaterialTopTabNavigator({
  ReccomendedMovies:{
    screen:ReccomendedMovieScreen,
    navigationOptions: {
      tabBarLabel:"Reccomended",
      tabBarOptions:{
        tabStyle:{backgroundColor:"green"},
        labelStyle:{color:"black"},
        indicatorStyle:{backgroundColor:"orange"}
      }
    }
  },
  PopularMovies:{
    screen:PopularMovieScreen,
    navigationOptions: {
      tabBarLabel:"Popular",
      tabBarOptions:{
        tabStyle:{backgroundColor:"green"},
        labelStyle:{color:"black"},
        indicatorStyle:{backgroundColor:"orange"}
      }
    }
  }
})

const AppStackNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{headerShown:false}
  },
  AppTopNav:{
    screen:AppTopNavigation,
    navigationOptions:{
      headerBackTitle:null,
      headerTintColor:"green",
      headerTitle:ReccomendedMovies,
      headerStyle:{backgroundColor:"yellow"},
      headerTitleStyle:{color:"black",fontWeight:"bold",fontSize:RFValue(18)}
    }
  },
  initialRouteName:"Home"
})

const AppContainer = createAppContainer(AppStackNavigator);

