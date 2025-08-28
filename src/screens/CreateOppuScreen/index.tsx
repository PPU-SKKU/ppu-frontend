import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import styles from './styles';
import { Text } from '../../components/Text';
import SubmitButton from '../../components/Buttons/SubmitButton';
import SubtitleHeaderText from './components/SubtitleHeaderText';

const CreateOppuScreen: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <SubmitButton onPress={() => {}} label={'이전'} />
      <Text variant="title2" weight="extraBold">
        오뿌 작성
      </Text>
      <SubmitButton onPress={() => {}} label={'완료'} />
    </View>

    <ScrollView style={styles.content}>
      <View style={styles.perfumeWrapper}>
        <SubtitleHeaderText
          title="향수"
          description="오늘 뿌린 향수를 추가하고 횟수를 선택해주세요"
        />
      </View>
      {/* 작성 날짜 설정 */}
      <View style={styles.tagWrapper}></View>
      <View style={styles.photoWrapper}></View>
      <View style={styles.recordWrapper}></View>
      <View style={styles.feedbackWrapper}></View>
    </ScrollView>
  </SafeAreaView>
);

export default CreateOppuScreen;
