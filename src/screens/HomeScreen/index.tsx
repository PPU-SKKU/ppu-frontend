import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import SubmitButton from '../../components/Buttons/SubmitButton';

const HomeScreen: React.FC = () => (
  <View style={styles.container}>
    <Text>홈 화면</Text>
    <SubmitButton
      backgroundColor="#242424"
      textColor="#fff"
      label="완료"
      disabled={true}
      onPress={() => {
        console.log('비활성 버튼');
      }}
    ></SubmitButton>
    <SubmitButton
      backgroundColor="#242424"
      textColor="#fff"
      label="완료"
      disabled={false}
      onPress={() => {
        console.log('활성 버튼');
      }}
    ></SubmitButton>
  </View>
);

export default HomeScreen;
