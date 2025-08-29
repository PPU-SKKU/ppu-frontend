import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  segmentedFieldContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    gap: 20,
  },
  labelDescriptionContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  multiSelectTabContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
