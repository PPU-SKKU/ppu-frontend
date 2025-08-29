import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  segmentedFieldContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    gap: 20,
    backgroundColor: colors.white32,
  },
  labelDescriptionContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  segmentedControlsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 22,
    backgroundColor: colors.grey8,
  },
});

export default styles;
