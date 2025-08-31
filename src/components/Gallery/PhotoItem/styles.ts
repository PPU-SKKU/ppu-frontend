import { StyleSheet } from 'react-native';
import colors from '../../../theme/color';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1 / 3,
    aspectRatio: 1,
    margin: 1,
  },
  image: {
    flex: 1,
    borderRadius: 4,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.softPurple,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
