import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.limeGreenLight,
  },

  bodyContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    gap: 20,
    backgroundColor: colors.lightGrey,
  },
  optionalContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    padding: 20,
    gap: 20,
  },

  ratingContainer: {},
  ratingLabelSection: {},
  ratingOptions: {},
  ratingDescriptionSection: {},
});

export default styles;
