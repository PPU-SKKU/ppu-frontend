import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.lightGrey,
  },
});

export default styles;
