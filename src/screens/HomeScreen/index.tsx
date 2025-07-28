import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/common/Buttons';

const HomeScreen: React.FC = () => (
  <View style={styles.container}>
    <Text>홈 화면</Text>
    <Button
      size="large"
      label="버튼"
      backgroundColor="#34618E"
      textColor="#fff"
    ></Button>
    <Button
      size="large"
      label="버튼"
      backgroundColor="#34618E"
      textColor="#fff"
      disabled={true}
    ></Button>
    <Button
      size="medium"
      label="버튼"
      backgroundColor="#D6E4F7"
      textColor="#3B4858"
    ></Button>
    <Button
      size="small"
      label="버튼"
      backgroundColor="#ECEEF4"
      textColor="#1C1B1F"
    ></Button>
    <Button
      size="large"
      label="버튼"
      backgroundColor="#34618E"
      textColor="#fff"
      submit={true}
    ></Button>
  </View>
);

export default HomeScreen;
