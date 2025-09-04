import { BackHandler, SafeAreaView, ScrollView, View } from 'react-native';
import CustomStackHeader from '../../components/CustomStackHeader';
import colors from '../../theme/color';
import styles from './styles';
import TextField from '../../components/TextField';
import { useState } from 'react';
import PerfumeProfile from './components/PerfumeProfile';
import SegmentedField from './components/SegmentedField';
import Divider from '../../components/Divider';
import MultiSelectField from './components/MultiSelectField';
import { useNavigation } from '@react-navigation/native';
import { RootNavProp } from '../../types/navigationProps';
import { Perfume } from '../../types/perfume';
import {
  DummySelectedPerfumeNoImage,
  DummySelectedPerfumeWithImage,
} from './dummy';
import { Text } from '../../components/Text';
import Toggle from '../../components/Toggle';
import BasicModal from '../../components/Modal';
import { Pressable } from 'react-native';

const CreateReviewScreen: React.FC = () => {
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume>(
    DummySelectedPerfumeWithImage,
  );
  const [isOwned, setIsOwned] = useState(true);
  const [isWished, setIsWished] = useState(true);
  const [memo, setMemo] = useState('');
  const [genderOptions, setGenderOptions] = useState([
    { value: '남성', isSelected: false },
    { value: '여성', isSelected: true },
    { value: '공용', isSelected: false },
  ]);
  const [gender, setGender] = useState(genderOptions[1].value);
  const [wearStatus, setWearStatus] = useState(false);
  const [seasonOptions, setSeasonOptions] = useState([
    { value: '봄', isSelected: true },
    { value: '여름', isSelected: true },
    { value: '가을', isSelected: false },
    { value: '겨울', isSelected: false },
  ]);
  const navigation = useNavigation<RootNavProp>();

  const [isCancelEditingModalVisible, setIsCancelEditingModalVisible] =
    useState(false);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <BasicModal
        visible={isCancelEditingModalVisible}
        title="작성 취소"
        description="작성 중인 내용이 모두 사라져요!"
        onClose={() => setIsCancelEditingModalVisible(false)}
        onConfirm={() => {
          navigation.goBack();
        }}
        confirmText="나가기"
        cancelText="취소"
        backgroundColor={colors.grey100}
      >
        {/* 모달 안에 커스텀 UI 넣기 가능 */}
        {/* <View>
          <Text></Text>
        </View>*/}
      </BasicModal>
      <CustomStackHeader
        title="시향기 작성"
        disabled={isSubmitButtonDisabled}
        onPress={() => {
          console.log('시향기 작성 완료!');
        }}
        onBackPress={() => {
          setIsCancelEditingModalVisible(true);
        }}
      />
      <ScrollView
        contentContainerStyle={styles.bodyContainer}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={styles.switchPerfumeButton}
          onPress={() => {
            console.log('향수 변경 클릭');
          }}
        >
          <Text variant="body" weight="semiBold" color={colors.white}>
            향수 변경
          </Text>
        </Pressable>
        <PerfumeProfile
          perfume={selectedPerfume}
          isOwned={isOwned}
          isWished={isWished}
        ></PerfumeProfile>

        <TextField
          label="나의 향기 기록"
          value={memo}
          onChangeText={text => {
            setMemo(text);
          }}
          placeholder="나만의 향기 기록을 작성해주세요"
        ></TextField>
        <View style={styles.optionalContainer}>
          <SegmentedField
            label="성별"
            description="어떤 성별을 위해 만들어진 향인가요?"
            options={genderOptions}
            setOptions={setGenderOptions}
            value={gender}
            onSelect={value => {
              setGender(value);
            }}
          ></SegmentedField>
          <Divider></Divider>
          <View style={styles.isTestedContainer}>
            <View style={styles.isTestedTextContainer}>
              <Text variant="bodyCompact" weight="semiBold">
                착향 여부
              </Text>
              <Text variant="caption1" weight="regular" color={colors.grey54}>
                이 향수를 실제로 착향해보셨나요?
              </Text>
            </View>
            <Toggle
              onToggle={() => {
                setWearStatus(!wearStatus);
              }}
              isOn={wearStatus}
              isOnBackgroundColor={colors.grey100}
            />
          </View>
          <Divider></Divider>
          <MultiSelectField
            label="계절감"
            description="향이 잘 어울리는 계절을 모두 선택해주세요"
            options={seasonOptions}
            setOptions={setSeasonOptions}
          ></MultiSelectField>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateReviewScreen;
