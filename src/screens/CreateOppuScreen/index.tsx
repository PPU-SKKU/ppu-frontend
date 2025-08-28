import React from 'react';
import { View, ScrollView, SafeAreaView, Pressable } from 'react-native';
import styles from './styles';
import { Text } from '../../components/Text';
import SubmitButton from '../../components/Buttons/SubmitButton';
import { TitleHeaderText, SubtitleHeaderText } from './components/HeaderText';
import colors from '../../theme/color';
import PlusIcon from '../../assets/svgs/plus.svg';
import Toggle from '../../components/Toggle';

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
        <TitleHeaderText
          title="향수"
          description="오늘 뿌린 향수를 추가하고 횟수를 선택해주세요"
        />
        <Pressable style={styles.addPerfumeButton} onPress={() => {}}>
          <PlusIcon></PlusIcon>
          <Text variant="body" weight="semiBold" color={colors.white}>
            향수 추가
          </Text>
        </Pressable>
      </View>
      {/* 작성 날짜 설정 */}
      <View style={styles.tagWrapper}>
        <TitleHeaderText
          title="태그"
          description="향수를 잘 표현하는 키워드를 선택해주세요"
        />
      </View>
      <View style={styles.optionalWrapper}>
        <SubtitleHeaderText
          title="사진"
          description="향수와 함께한 오늘의 순간을 사진으로 남겨보세요"
        />
      </View>

      <Spacer />

      <View style={styles.optionalWrapper}>
        <SubtitleHeaderText title="기록" />
      </View>

      <Spacer />

      <View style={styles.optionalWrapper}>
        <View style={styles.feedbackHeader}>
          <SubtitleHeaderText
            title="호드백 받은 날"
            description="오늘 향수를 뿌리고 반응이 좋았나요?"
          />
          <Toggle onToggle={() => {}} isOn={false} />
        </View>
        <Text variant="caption1" weight="regular" color={colors.grey54}>
          호드백은 향수를 사용했을 때 주변에서 들은 긍정적인 피드백을 의미해요
        </Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const Spacer = () => <View style={{ height: 20 }} />;

export default CreateOppuScreen;
