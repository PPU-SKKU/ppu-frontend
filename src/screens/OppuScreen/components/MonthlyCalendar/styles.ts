import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 22,
    marginHorizontal: 12,
    zIndex: 10,
    backgroundColor: 'yellow',
  },
  headers: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    padding: 16,
  },
  titleContainer: {
    alignItems: 'center',
    gap: 4,
  },
  navButton: {
    backgroundColor: colors.grey8,
    padding: 10,
    borderRadius: 22,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {},
});

export default styles;
