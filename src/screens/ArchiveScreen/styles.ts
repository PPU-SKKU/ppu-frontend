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
    backgroundColor: colors.lightGrey,
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  perfumeReviewListContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  perfumeReviewContent: {
    padding: 12,
    gap: 16,
    // 내용이 적을 때도 스크롤 영역을 채우려면
    // flexGrow: 1,
  },
});

export default styles;
