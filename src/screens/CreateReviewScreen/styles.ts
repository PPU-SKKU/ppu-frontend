import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  bodyContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    gap: 20,
    backgroundColor: colors.lightGrey,
  },
  switchPerfumeButtonContainer: {
    padding: 0,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
  },
  switchPerfumeButton: {
    flexDirection: 'row',
    padding: 12,
    gap: 8,
    borderRadius: 16,
  },
  optionalContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    padding: 20,
    gap: 20,
  },
  isTestedContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  isTestedTextContainer: {
    flexDirection: 'column',
    gap: 8,
  },
});

export default styles;
