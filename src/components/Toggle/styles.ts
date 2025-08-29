import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

export default StyleSheet.create({
  toggleContainer: {
    width: 50,
    height: 28,
    borderRadius: 15,
    backgroundColor: colors.grey12,
    justifyContent: 'center',
    padding: 3,
  },
  toggleContainerOn: {
    backgroundColor: colors.softPurple,
  },
  toggleCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  toggleCircleOff: {
    transform: [{ translateX: 0 }],
  },
  toggleCircleOn: {
    transform: [{ translateX: 21 }],
  },
});
