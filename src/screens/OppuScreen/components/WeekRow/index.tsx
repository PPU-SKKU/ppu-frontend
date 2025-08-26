import React from 'react';
import { View, Pressable } from 'react-native';
import { Text } from '../../../../components/Text';
import colors from '../../../../theme/color';
import { CalendarDay, Week, isSameDay } from '../dateUtils';
import styles from './styles';

interface WeekRowProps {
  week: Week;
  focusedDate: Date;
  onSelectDate?: (date: Date) => void;
}

const getDateStyle = (day: CalendarDay, focusedDate: Date) => {
  const today = new Date();
  const isToday = day.date.toDateString() === today.toDateString();
  const isSelected = day.date.toDateString() === focusedDate.toDateString();
  const isCurrentMonth = day.isCurrentMonth;

  if (isToday && isSelected) {
    return { backgroundColor: colors.purple, textColor: colors.white };
  }
  if (isToday && !isSelected) {
    return { backgroundColor: 'transparent', textColor: colors.purple };
  }
  if (!isToday && isSelected) {
    return { backgroundColor: colors.purple, textColor: colors.white };
  }
  if (!isToday && !isSelected && isCurrentMonth) {
    return { backgroundColor: 'transparent', textColor: colors.grey100 };
  }
  return { backgroundColor: 'transparent', textColor: colors.grey39 };
};

const WeekRow: React.FC<WeekRowProps> = ({
  week,
  focusedDate,
  onSelectDate,
}) => {
  return (
    <View style={styles.container}>
      {week.map(day => {
        const { backgroundColor, textColor } = getDateStyle(day, focusedDate);
        const isSelected =
          day.date.toDateString() === focusedDate.toDateString();

        return (
          <Pressable
            key={day.date.toISOString()}
            style={styles.dayCellContainer}
            onPress={() => {
              if (day.isCurrentMonth) {
                onSelectDate?.(day.date);
              }
            }}
          >
            <View style={[styles.dateCircle, { backgroundColor }]}>
              <Text
                variant="title1"
                weight={isSelected ? 'semiBold' : 'medium'}
                color={textColor}
              >
                {day.label}
              </Text>
            </View>
            {/* TODO: 태그 현황 추가 */}
          </Pressable>
        );
      })}
    </View>
  );
};

export default WeekRow;
