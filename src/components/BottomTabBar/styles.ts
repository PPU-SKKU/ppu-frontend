import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    color: '#A3A9B6',
  },
  addCircle: {
    backgroundColor: colors.grey100,
    borderRadius: 100,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: colors.white100,
    fontSize: 32,
    includeFontPadding: false,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default styles;
