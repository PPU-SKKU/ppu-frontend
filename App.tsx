import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootStackNavigator from '../ppu-frontend/src/navigators/RootStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootStackNavigator />
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
