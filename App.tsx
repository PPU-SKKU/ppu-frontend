/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import BottomTabBar from './src/components/common/BottomTabBar';
import HomeScreen from './src/screens/HomeScreen';
import OppuScreen from './src/screens/OppuScreen';
import AddScreen from './src/screens/AddScreen';
import ArchiveScreen from './src/screens/ArchiveScreen';
import MyScreen from './src/screens/MyScreen';

const Tab = createBottomTabNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <>
        <NavigationContainer>
          <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
            <Tab.Screen name="HOME" component={HomeScreen} />
            <Tab.Screen name="OPPU" component={OppuScreen} />
            <Tab.Screen name="ADD" component={AddScreen} />
            <Tab.Screen name="ARCHIVE" component={ArchiveScreen} />
            <Tab.Screen name="MY" component={MyScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
