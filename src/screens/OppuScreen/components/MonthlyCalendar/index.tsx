import { View } from 'react-native';
import { Week } from '../dateUtils';
import styles from './styles';
import { Pressable } from 'react-native';
import NextIcon from '../../../../assets/svgs/chevron_right.svg';
import PrevIcon from '../../../../assets/svgs/chevron_left.svg';
import { Text } from '../../../../components/Text';
import colors from '../../../../theme/color';
import WeekDayLabels from '../WeekDayLabels';
import WeekRow from '../WeekRow';
import React, { useState } from 'react';

interface MonthlyCalendarProps {
  monthWeeks: Week[];
  selectedDate: Date;
  onSelectDate?: (date: Date) => void;
  onNextMonth?: () => void;
  onPrevMonth?: () => void;
}

interface NavButtonProps {
  onPress?: () => void;
  icon: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ onPress, icon }) => {
  return (
    <Pressable onPress={onPress} style={styles.navButton}>
      {icon}
    </Pressable>
  );
};

const MonthlyCalendar: React.FC<MonthlyCalendarProps> = ({
  monthWeeks,
  selectedDate = new Date(),
  onSelectDate,
  onNextMonth,
  onPrevMonth,
}) => {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() + 1;

  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <NavButton
          onPress={onPrevMonth}
          icon={<PrevIcon width={24} height={24} />}
        />
        <View style={styles.titleContainer}>
          <Text variant="caption1" weight="medium" color={colors.grey54}>
            {year}년
          </Text>
          <Text variant="title1" weight="bold">
            {month}월
          </Text>
        </View>
        <NavButton
          onPress={onNextMonth}
          icon={<NextIcon width={24} height={24} />}
        />
      </View>
      <WeekDayLabels />
      <View style={styles.divider} />
      {monthWeeks.map((week, idx) => {
        const isLast = idx === monthWeeks.length - 1;
        return (
          <React.Fragment key={idx}>
            <WeekRow
              key={idx}
              week={week}
              focusedDate={selectedDate}
              onSelectDate={onSelectDate}
            />
            {!isLast && <View style={styles.divider} />}
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default MonthlyCalendar;
