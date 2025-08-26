import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
  },
  weekDayLabelRow: {
    flexDirection: 'row',
  },
  weekDayLabelCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  weeklyPager: {
    height: 64,
  },
});

export default styles;
