import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Week, isSameDay } from '../dateUtils';
import WeekRow from '../WeekRow';
import PagerView from 'react-native-pager-view';
import WeekDayLabels from '../WeekDayLabels';

interface WeeklyCalendarProps {
  monthWeeks: Week[];
  selectedDate?: Date;
  onSelectDate?: (date: Date) => void;
}

const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({
  monthWeeks,
  selectedDate,
  onSelectDate,
}) => {
  const [focusedDate, setFocusedDate] = useState<Date>(
    () => selectedDate ?? new Date(),
  );

  const pagerRef = useRef<PagerView>(null);

  const handleSelectDate = (date: Date) => {
    setFocusedDate(date);
    onSelectDate && onSelectDate(date);
    // TODO: 날짜 선택 시 동작
  };

  return (
    <View style={styles.container}>
      <WeekDayLabels />

      <PagerView
        style={styles.weeklyPager}
        initialPage={monthWeeks.findIndex(week =>
          week.some(day => isSameDay(day.date, focusedDate)),
        )}
        ref={pagerRef}
        onPageSelected={e => {}}
      >
        {monthWeeks.map((week, idx) => (
          <WeekRow
            key={idx}
            week={week}
            focusedDate={focusedDate}
            onSelectDate={handleSelectDate}
          />
        ))}
      </PagerView>
    </View>
  );
};

export default WeeklyCalendar;
