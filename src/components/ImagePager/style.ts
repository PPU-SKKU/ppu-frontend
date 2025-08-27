import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageIndicator: {
    position: 'absolute',
    flexDirection: 'row',
    top: 20,
    left: 20,
    backgroundColor: colors.greyVisible,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    zIndex: 10,
    gap: 2,
  },
  pager: {
    flex: 1,
  },
  imageWrapper: {},
  image: {
    flex: 1,
    height: 362,
  },
});

export default styles;
