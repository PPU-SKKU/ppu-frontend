import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text } from '../../components/Text';
import styles from './styles';
import ArrowDownIcon from '../../assets/svgs/chevron_down.svg';
import WeeklyCalendar from './components/WeeklyCalendar';

const OppuScreen: React.FC = () => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text variant="headline" weight="extraBold" style={{ marginRight: 8 }}>
          OPPU
        </Text>
        <View style={styles.monthContainer}>
          <Text variant="headline" weight="extraBold">
            {currentMonth}월
          </Text>
          <ArrowDownIcon width={32} height={32} />
        </View>
      </View>
      <View style={styles.calendarContainer}>
        <WeeklyCalendar
          monthDate={today}
          selectedDate={today}
          onSelectDate={date => {
            console.log('Selected date:', date);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default OppuScreen;
