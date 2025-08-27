import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.softPurple,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
  },
  moreOptionButton: {
    marginLeft: 'auto',
  },
  monthTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  calendarContainer: {
    width: '100%',
    // backgroundColor: colors.white,
  },
  weekCalendarWrapper: {},
  monthCalendarWrapper: {
    width: '100%',
    position: 'absolute',
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  emptyWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  separator: {
    height: 24,
  },
});

export default styles;
