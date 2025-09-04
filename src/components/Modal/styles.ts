import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 48,
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 296,
    borderRadius: 20,
    backgroundColor: colors.white,
    padding: 20,
    gap: 16,
  },
  buttonContainer: { flexDirection: 'row', gap: 12 },
  cancelButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: colors.grey12,
    borderRadius: 22,
  },
  confirmButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: colors.grey100,
    borderRadius: 22,
  },
});

export default styles;
