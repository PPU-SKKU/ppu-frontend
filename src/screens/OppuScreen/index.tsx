import React, { useMemo, useState } from 'react';
import { View, SafeAreaView, Pressable } from 'react-native';
import { Text } from '../../components/Text';
import styles from './styles';
import ArrowDownIcon from '../../assets/svgs/chevron_down.svg';
import WeeklyCalendar from './components/WeeklyCalendar';
import { buildWeeksForMonth } from './components/dateUtils';
import MonthlyCalendar from './components/MonthlyCalendar';

const OppuScreen: React.FC = () => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;

  const monthWeeks = useMemo(() => buildWeeksForMonth(today), [today]);
  const [isMonthView, setIsMonthView] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text variant="headline" weight="extraBold" style={{ marginRight: 8 }}>
          OPPU
        </Text>
        <View style={styles.monthTitleContainer}>
          <Text variant="headline" weight="extraBold">
            {currentMonth}월
          </Text>
          <Pressable onPress={() => setIsMonthView(prev => !prev)}>
            <ArrowDownIcon
              width={32}
              height={32}
              style={{
                transform: [{ rotate: isMonthView ? '180deg' : '0deg' }],
              }}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.calendarContainer}>
        {isMonthView && (
          <View style={styles.monthCalendarWrapper}>
            <MonthlyCalendar
              monthWeeks={monthWeeks}
              selectedDate={today}
              onSelectDate={date => {
                console.log('Selected date:', date);
              }}
              onNextMonth={() => {
                // 다음 달 이동
              }}
              onPrevMonth={() => {
                // 이전 달 이동
              }}
            />
          </View>
        )}
        <View style={styles.weekCalendarWrapper}>
          <WeeklyCalendar
            monthWeeks={monthWeeks}
            selectedDate={today}
            onSelectDate={date => {
              console.log('Selected date:', date);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OppuScreen;
