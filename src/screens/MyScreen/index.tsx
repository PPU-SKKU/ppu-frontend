import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const MyScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>마이페이지 화면</Text>
  </View>
);

export default MyScreen;
