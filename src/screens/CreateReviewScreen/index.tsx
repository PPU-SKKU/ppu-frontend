import { SafeAreaView, ScrollView, View } from 'react-native';
import CustomStackHeader from '../../components/CustomStackHeader';
import colors from '../../theme/color';
import styles from './styles';
import TextField from '../../components/TextField';
import { useState } from 'react';
import PerfumeProfile from './components/PerfumeProfile';
import SegmentedField from './components/SegmentedField';
import Divider from '../../components/Divider';
import MultiSelectField from './components/MultiSelectField';

const CreateReviewScreen: React.FC = () => {
  const [memo, setMemo] = useState('');
  const [isOwned, setIsOwned] = useState(false);
  const [isWishListed, setIsWishListed] = useState(true);
  const genderOptions = [
    { value: '남성', isSelected: false },
    { value: '여성', isSelected: true },
    { value: '공용', isSelected: false },
  ];
  const [gender, setGender] = useState(genderOptions[1].value);
  const wearStatusOptions = [
    { value: '착향', isSelected: true },
    { value: '남성', isSelected: false },
  ];
  const [wearStatus, setWearStatus] = useState(wearStatusOptions[0].value);
  const seasonOptions = [
    { value: '봄', isSelected: true },
    { value: '여름', isSelected: true },
    { value: '가을', isSelected: false },
    { value: '겨울', isSelected: false },
  ];

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <CustomStackHeader
        gradientStartColor={colors.limeGreenLight}
        title="시향기 작성"
        disabled={false}
        onPress={() => {
          console.log('시향기 작성 완료!');
        }}
      />
      <ScrollView
        contentContainerStyle={styles.bodyContainer}
        showsVerticalScrollIndicator={false}
      >
        <PerfumeProfile
          isOwned={isOwned}
          isWishListed={isWishListed}
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
            value={gender}
            onSelect={value => {
              setGender(value);
            }}
          ></SegmentedField>
          <Divider></Divider>
          <SegmentedField
            label="착향 여부"
            description="이 향수를 실제로 착용해보셨나요?"
            options={wearStatusOptions}
            value={wearStatus}
            onSelect={value => {
              setWearStatus(value);
            }}
          ></SegmentedField>
          <Divider></Divider>
          <MultiSelectField
            label="계절감"
            description="향이 잘 어울리는 계절을 모두 선택해주세요"
            options={seasonOptions}
            onSelect={() => {}}
          ></MultiSelectField>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateReviewScreen;
