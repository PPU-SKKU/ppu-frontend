import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.lightGrey,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -1.0,
    color: colors.grey100,
  },
  perfumeSearchCardContainer: {
    padding: 20,
    gap: 8,
  },
});

export default styles;
