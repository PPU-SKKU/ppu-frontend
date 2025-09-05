import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  wrapper: {
    padding: 20,
    backgroundColor: colors.white32,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
  },
  nameWrapper: {},
  nameInput: {
    alignSelf: 'stretch',
    borderColor: colors.grey31,
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -1.0,
    color: colors.grey100,
  },
  colorWrapper: {},
});

export default styles;
