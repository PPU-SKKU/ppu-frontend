import React, { useMemo, useState, useRef } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Text } from '../../../../components/Text';
import colors from '../../../../theme/color';
import { buildWeeksForMonth, isSameDay } from '../dateUtils';
import WeekRow from '../WeekRow';
import PagerView from 'react-native-pager-view';

interface WeeklyCalendarProps {
  monthDate: Date;
  selectedDate?: Date;
  onSelectDate?: (date: Date) => void;
}

const WEEKDAY_LABELS = ['일', '월', '화', '수', '목', '금', '토'];

const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({
  monthDate,
  selectedDate,
  onSelectDate,
}) => {
  const [focusedDate, setFocusedDate] = useState<Date>(
    () => selectedDate ?? new Date(),
  );
  const monthWeeks = useMemo(() => buildWeeksForMonth(monthDate), [monthDate]);

  const pagerRef = useRef<PagerView>(null);

  const handleSelectDate = (date: Date) => {
    setFocusedDate(date);
    onSelectDate && onSelectDate(date);
    // TODO: 날짜 선택 시 동작
  };

  return (
    <View style={styles.container}>
      <View style={styles.weekDayLabelRow}>
        {WEEKDAY_LABELS.map((label, idx) => {
          return (
            <View key={idx} style={styles.weekDayLabelCell}>
              <Text variant="caption1" weight="medium" color={colors.grey54}>
                {label}
              </Text>
            </View>
          );
        })}
      </View>

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
