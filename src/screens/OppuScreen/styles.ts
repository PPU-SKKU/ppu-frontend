import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
  },
  monthTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  calendarContainer: {
    width: '100%',
    // backgroundColor: 'pink', 테스트용
  },
  weekCalendarWrapper: {},
  monthCalendarWrapper: {
    width: '100%',
    position: 'absolute',
  },
});

export default styles;
