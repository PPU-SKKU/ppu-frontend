import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  container: {
    borderRadius: 22,
    marginHorizontal: 12,
    zIndex: 10,
    backgroundColor: colors.white,
    shadowColor: colors.grey100,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
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
  body: {
    padding: 8,
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: colors.grey4,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default styles;
