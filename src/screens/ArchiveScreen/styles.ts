import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.limeGreenLight,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
<<<<<<< HEAD
    backgroundColor: colors.lightGrey,
=======
    backgroundColor: colors.white,
>>>>>>> 74b463bb76ce9c039a303950cb433dd2c9922aca
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 20,
<<<<<<< HEAD
    backgroundColor: 'transparent',
=======
>>>>>>> 74b463bb76ce9c039a303950cb433dd2c9922aca
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  perfumeReviewListContainer: {
<<<<<<< HEAD
    flex: 1,
    flexDirection: 'column',
  },
  perfumeReviewContent: {
    padding: 12,
    gap: 16,
    // 내용이 적을 때도 스크롤 영역을 채우려면
    // flexGrow: 1,
=======
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 12,
    gap: 16,
>>>>>>> 74b463bb76ce9c039a303950cb433dd2c9922aca
  },
});

export default styles;
