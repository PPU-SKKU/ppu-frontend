import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  textFieldContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    gap: 16,
    backgroundColor: colors.white,
    borderRadius: 20,
    textAlignVertical: 'top',
  },
  textInput: {
    alignSelf: 'stretch',
    borderColor: colors.grey31,
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -1.0,
    color: colors.grey100,
  },
});

export default styles;
