import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import PerfumeSearchCard from '../SearchScreen/components/PerfumeSearchCard';

const MyScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <Text>마이페이지 화면</Text>*/}
      <PerfumeSearchCard
        perfumeImage=""
        perfumeName="오 드 빠르펭"
        perfumeBrand="샤넬"
        onPress={() => {
          console.log('향수 아이템 눌림');
        }}
      ></PerfumeSearchCard>
      <PerfumeSearchCard
        perfumeImage=""
        perfumeName="오 드 빠르펭"
        perfumeBrand="샤넬"
        onPress={() => {
          console.log('향수 아이템 눌림');
        }}
      ></PerfumeSearchCard>
      <PerfumeSearchCard
        perfumeImage=""
        perfumeName="오 드 빠르펭"
        perfumeBrand="샤넬"
        onPress={() => {
          console.log('향수 아이템 눌림');
        }}
      ></PerfumeSearchCard>
    </View>
  );
};

export default MyScreen;
