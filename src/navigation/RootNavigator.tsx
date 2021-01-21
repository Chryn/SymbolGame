import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from './Routes';
import HomeScreen from '../ui/screens/HomeScreen';
import GameScreen from '../ui/screens/GameScreen';
import ReportScreen from '../ui/screens/RecapScreen';

const RootStack = createStackNavigator();

const RouteNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={Screens.HomeScreen} component={HomeScreen} />
      <RootStack.Screen name={Screens.GameScreen} component={GameScreen} />
      <RootStack.Screen name={Screens.RecapScreen} component={ReportScreen} />
    </RootStack.Navigator>
  );
};

export default RouteNavigator;
