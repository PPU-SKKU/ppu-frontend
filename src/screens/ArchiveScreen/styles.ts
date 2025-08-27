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
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});

export default styles;
