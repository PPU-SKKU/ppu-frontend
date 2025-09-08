import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  datePickerContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    gap: 16,
    backgroundColor: colors.white,
    borderRadius: 20,
    textAlignVertical: 'top',
  },
  labelContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  datePickerButtonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default styles;
