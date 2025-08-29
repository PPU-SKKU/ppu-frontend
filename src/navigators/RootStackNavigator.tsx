import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import CreateReviewScreen from '../screens/CreateReviewScreen';
import { RootStackParamList } from '../types/navigationTypes';
import CreateOppuScreen from '../screens/CreateOppuScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Main" component={MainTabNavigator} />
      <RootStack.Screen name="CreateOppu" component={CreateOppuScreen} />
      <RootStack.Screen name="CreateReview" component={CreateReviewScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
