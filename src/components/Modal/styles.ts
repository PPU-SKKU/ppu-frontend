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
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -1.0,
  },
  buttonContainer: { flexDirection: 'row', gap: 12 },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 22,
  },
});

export default styles;
