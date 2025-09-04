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
  switchPerfumeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    gap: 8,
    alignSelf: 'stretch',
    borderRadius: 16,
    backgroundColor: colors.grey100,
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
