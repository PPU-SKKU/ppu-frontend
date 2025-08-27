import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 4,
  },
  perfumeWrapper: {
    width: 40,
    height: 40,
    aspectRatio: 1,
    padding: 2,
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: colors.grey8,
    position: 'relative',
  },
  image: {
    width: 36,
    height: 36,
  },
  sprayBadge: {
    position: 'absolute',
    top: -10,
    right: -12,
    backgroundColor: colors.purple,
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
