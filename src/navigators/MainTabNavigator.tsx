import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabBar from '../components/BottomTabBar';
import AddScreen from '../screens/AddScreen';
import ArchiveScreen from '../screens/ArchiveScreen';
import HomeScreen from '../screens/HomeScreen';
import MyScreen from '../screens/MyScreen';
import OppuScreen from '../screens/OppuScreen';
import {
  HomeStackParamList,
  OppuStackParamList,
  AddStackParamList,
  ArchiveStackParamList,
  MyStackParamList,
} from '../types/navigationTypes';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const OppuStack = createNativeStackNavigator<OppuStackParamList>();
const AddStack = createNativeStackNavigator<AddStackParamList>();
const ArchiveStack = createNativeStackNavigator<ArchiveStackParamList>();
const MyStack = createNativeStackNavigator<MyStackParamList>();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function OppuStackNavigator() {
  return (
    <OppuStack.Navigator screenOptions={{ headerShown: false }}>
      <OppuStack.Screen name="Oppu" component={OppuScreen} />
    </OppuStack.Navigator>
  );
}

function AddStackNavigator() {
  return (
    <AddStack.Navigator screenOptions={{ headerShown: false }}>
      <AddStack.Screen name="Add" component={AddScreen} />
      {/* 필요 시 하위 화면 추가 */}
    </AddStack.Navigator>
  );
}

function ArchiveStackNavigator() {
  return (
    <ArchiveStack.Navigator screenOptions={{ headerShown: false }}>
      <ArchiveStack.Screen name="Archive" component={ArchiveScreen} />
    </ArchiveStack.Navigator>
  );
}

function MyStackNavigator() {
  return (
    <MyStack.Navigator screenOptions={{ headerShown: false }}>
      <MyStack.Screen name="My" component={MyScreen} />
      {/* 필요 시 하위 화면 추가 */}
    </MyStack.Navigator>
  );
}

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen name="OppuStack" component={OppuStackNavigator} />
      <Tab.Screen name="AddStack" component={AddStackNavigator} />
      <Tab.Screen name="ArchiveStack" component={ArchiveStackNavigator} />
      <Tab.Screen name="MyStack" component={MyStackNavigator} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
