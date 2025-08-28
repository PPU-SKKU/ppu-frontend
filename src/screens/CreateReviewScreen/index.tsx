import { SafeAreaView } from 'react-native';
import CustomStackHeader from '../../components/CustomStackHeader';
import colors from '../../theme/color';
import styles from './styles';
import { View } from 'react-native';

const CreateReviewScreen: React.FC = () => {
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
      <View style={styles.container} />
    </SafeAreaView>
  );
};

export default CreateReviewScreen;
