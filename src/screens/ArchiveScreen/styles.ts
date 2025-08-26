import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  perfumeReviewListContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 12,
    gap: 16,
  },
});

export default styles;
