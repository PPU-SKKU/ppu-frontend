import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import BottomTabBar from './src/components/BottomTabBar';
import HomeScreen from './src/screens/HomeScreen';
import OppuScreen from './src/screens/OppuScreen';
import AddScreen from './src/screens/AddScreen';
import ArchiveScreen from './src/screens/ArchiveScreen';
import MyScreen from './src/screens/MyScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
          <Tab.Screen name="HOME" component={HomeScreen} />
          <Tab.Screen
            name="OPPU"
            component={OppuScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="ADD" component={AddScreen} />
          <Tab.Screen name="ARCHIVE" component={ArchiveScreen} />
          <Tab.Screen name="MY" component={MyScreen} />
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
