import { SafeAreaView, ScrollView } from 'react-native';
import CustomStackHeader from '../../components/CustomStackHeader';
import colors from '../../theme/color';
import styles from './styles';
import TextField from '../../components/TextField';
import { useState } from 'react';
import PerfumeProfile from './components/PerfumeProfile';

const CreateReviewScreen: React.FC = () => {
  const [memo, setMemo] = useState('');
  const [isOwned, setIsOwned] = useState(false);
  const [isWishListed, setIsWishListed] = useState(true);
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateReviewScreen;
