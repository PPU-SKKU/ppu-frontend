import { View, StyleSheet, Pressable } from 'react-native';
import { Week } from '../dateUtils';
import styles from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';
import NextIcon from '../../../../assets/svgs/chevron_right.svg';
import PrevIcon from '../../../../assets/svgs/chevron_left.svg';
import { Text } from '../../../../components/Text';
import colors from '../../../../theme/color';
import WeekDayLabels from '../WeekDayLabels';
import WeekRow from '../WeekRow';
import React from 'react';
import { BlurView } from '@react-native-community/blur';

interface MonthlyCalendarProps {
  monthWeeks: Week[];
  selectedDate: Date;
  onSelectDate?: (date: Date) => void;
  onNextMonth?: () => void;
  onPrevMonth?: () => void;
}

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
    <View style={styles.shadow}>
      <View style={styles.container}>
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
        <View>
          <View style={styles.headers}>
            <NavButton onPress={onPrevMonth} iconName="chevron-left" />
            <View style={styles.titleContainer}>
              <Text variant="caption1" weight="medium" color={colors.grey54}>
                {year}년
              </Text>
              <Text variant="title1" weight="bold">
                {month}월
              </Text>
            </View>
            <NavButton onPress={onNextMonth} iconName="chevron-right" />
          </View>
          <View style={styles.body}>
            <WeekDayLabels />
            <View style={styles.divider} />
            {monthWeeks.map((week, idx) => {
              const isLast = idx === monthWeeks.length - 1;
              return (
                <React.Fragment key={week[0].date.toISOString()}>
                  <WeekRow
                    week={week}
                    focusedDate={selectedDate}
                    onSelectDate={onSelectDate}
                  />
                  {!isLast && <View style={styles.divider} />}
                </React.Fragment>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

type FeatherIconName = 'chevron-left' | 'chevron-right';

interface NavButtonProps {
  onPress?: () => void;
  iconName: FeatherIconName;
}

const NavButton: React.FC<NavButtonProps> = ({ onPress, iconName }) => {
  return (
    <Pressable style={styles.navButton} onPress={onPress}>
      <FeatherIcon name={iconName} size={24} color={colors.grey100} />
    </Pressable>
  );
};

export default MonthlyCalendar;
