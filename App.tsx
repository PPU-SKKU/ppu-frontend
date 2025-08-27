import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import BottomTabBar from './src/components/BottomTabBar';
import HomeScreen from './src/screens/HomeScreen';
import OppuScreen from './src/screens/OppuScreen';
import AddScreen from './src/screens/AddScreen';
import ArchiveScreen from './src/screens/ArchiveScreen';
import MyScreen from './src/screens/MyScreen';
import CreateReviewScreen from './src/screens/CreateReviewScreen';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const OppuStack = createNativeStackNavigator();
const AddStack = createNativeStackNavigator();
const ArchiveStack = createNativeStackNavigator();
const MyStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HOME" component={HomeScreen} />
      {/* 필요 시 하위 화면 추가 */}
    </HomeStack.Navigator>
  );
}

function OppuStackNavigator() {
  return (
    <OppuStack.Navigator>
      <OppuStack.Screen
        name="OPPU"
        component={OppuScreen}
        options={{ headerShown: false }}
      />
      {/* 필요 시 하위 화면 추가 */}
    </OppuStack.Navigator>
  );
}

function AddStackNavigator() {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name="ADD" component={AddScreen} />
      {/* 필요 시 하위 화면 추가 */}
    </AddStack.Navigator>
  );
}

function ArchiveStackNavigator() {
  return (
    <ArchiveStack.Navigator>
      <ArchiveStack.Screen
        name="ARCHIVE"
        component={ArchiveScreen}
        options={{ headerShown: false }}
      />
      {/* 👇 예시: 시향기 작성 화면을 푸시로 띄우기 */}
      <ArchiveStack.Screen
        name="CREATEREVIEW"
        component={CreateReviewScreen}
        options={{ title: '시향기 작성' }}
      />
    </ArchiveStack.Navigator>
  );
}

function MyStackNavigator() {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="MY"
        component={MyScreen}
        options={{ headerShown: false }}
      />
      {/* 필요 시 하위 화면 추가 */}
    </MyStack.Navigator>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
          <Tab.Screen name="HOMESTACK" component={HomeStackNavigator} />
          <Tab.Screen
            name="OPPUSTACK"
            component={OppuScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="ADDSTACK" component={AddStackNavigator} />
          <Tab.Screen
            name="ARCHIVESTACK"
            component={ArchiveStackNavigator}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="MYSTACK" component={MyStackNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
