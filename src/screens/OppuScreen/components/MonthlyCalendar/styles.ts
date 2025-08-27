import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.grey100,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 32,
    elevation: 4,
    zIndex: 10,
  },
  container: {
    borderRadius: 22,
    marginHorizontal: 12,
    backgroundColor: colors.white70,
    overflow: 'hidden',
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
