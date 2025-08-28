import { SafeAreaView } from 'react-native';
import CustomStackHeader from '../../components/CustomStackHeader';
import colors from '../../theme/color';
import styles from './styles';
import { View } from 'react-native';
import TextField from '../../components/TextField';
import { useState } from 'react';

const CreateReviewScreen: React.FC = () => {
  const [memo, setMemo] = useState('');
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
      <View style={styles.bodyContainer}>
        <TextField
          label="나의 향기 기록"
          value={memo}
          onChangeText={text => {
            setMemo(text);
          }}
          placeholder="나만의 향기 기록을 작성해주세요"
        ></TextField>
      </View>
    </SafeAreaView>
  );
};

export default CreateReviewScreen;
