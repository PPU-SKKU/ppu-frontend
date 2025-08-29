import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.grey4,
    borderRadius: 22,
    alignItems: 'center',
    gap: 4,
    padding: 4,
  },
  count: {
    flex: 1,
    textAlign: 'center',
  },
});

export default styles;
