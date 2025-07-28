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
    <GeneralButton
      size="medium"
      label="버튼"
      backgroundColor="#D6E4F7"
      textColor="#3B4858"
    ></GeneralButton>
    <GeneralButton
      size="small"
      label="버튼"
      backgroundColor="#ECEEF4"
      textColor="#1C1B1F"
    ></GeneralButton>
  </View>
);

export default HomeScreen;
