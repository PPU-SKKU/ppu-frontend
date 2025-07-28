import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import GeneralButton from '../../components/common/Buttons';

const HomeScreen: React.FC = () => (
  <View style={styles.container}>
    <Text>홈 화면</Text>
    <GeneralButton
      size="large"
      label="버튼"
      backgroundColor="#34618E"
      textColor="#fff"
    ></GeneralButton>
  </View>
);

export default HomeScreen;
