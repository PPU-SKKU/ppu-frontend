// styles.ts
import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  perfumeContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingVertical: 4,
    gap: 12,
    borderRadius: 12,
    backgroundColor: colors.white32,
  },
  perfumeImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  perfumeInfoSection: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
  },
  iconContainer: {
    padding: 16,
  },
});

export default styles;
