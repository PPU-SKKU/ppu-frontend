import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: colors.white,
    marginHorizontal: 20,
  },
  imageWrapper: {
    height: 362,
  },
  contentWrapper: {
    padding: 20,
    gap: 12,
  },
  divider: {
    height: 1,
    backgroundColor: colors.grey4,
    marginHorizontal: 16,
  },
  perfumesWrapper: {
    padding: 20,
  },
});

export default styles;
