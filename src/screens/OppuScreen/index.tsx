import React, { useMemo, useState } from 'react';
import { View, SafeAreaView, Pressable, FlatList } from 'react-native';
import { Text } from '../../components/Text';
import styles from './styles';
import ArrowDownIcon from '../../assets/svgs/chevron_down.svg';
import WeeklyCalendar from './components/WeeklyCalendar';
import { buildWeeksForMonth } from './components/dateUtils';
import MonthlyCalendar from './components/MonthlyCalendar';
import Gradient from '../../components/Gradient';
import colors from '../../theme/color';
import OppuItem from './components/OppuItem';
import { dummyList } from './Dummy';

const OppuScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const monthWeeks = useMemo(
    () => buildWeeksForMonth(selectedDate),
    [selectedDate],
  );
  const [isMonthView, setIsMonthView] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Gradient colors={[colors.softPurple, '#F4F4F4']} locations={[0, 0.6]}>
        <View style={styles.headerContainer}>
          <Text
            variant="headline"
            weight="extraBold"
            style={{ marginRight: 8 }}
          >
            OPPU
          </Text>
          <View style={styles.monthTitleContainer}>
            <Text variant="headline" weight="extraBold">
              {selectedDate.getMonth() + 1}월
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
      </Gradient>

      <View style={styles.calendarContainer}>
        {isMonthView && (
          <View style={styles.monthCalendarWrapper}>
            <MonthlyCalendar
              monthWeeks={monthWeeks}
              selectedDate={selectedDate}
              onSelectDate={date => {
                setSelectedDate(date);
              }}
              onNextMonth={() => {
                setSelectedDate(
                  prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
                );
              }}
              onPrevMonth={() => {
                setSelectedDate(
                  prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
                );
              }}
            />
          </View>
        )}
      </View>

      <FlatList
        style={styles.contentWrapper}
        data={dummyList}
        keyExtractor={(item, index) => index + ''}
        renderItem={({ item }) => (
          <OppuItem
            tag={item.tag}
            perfumes={item.perfumes}
            photos={item.photos}
            record={item.record}
          />
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={() => (
          <View style={styles.weekCalendarWrapper}>
            <WeeklyCalendar
              monthWeeks={monthWeeks}
              selectedDate={selectedDate}
              onSelectDate={date => {
                setSelectedDate(date);
              }}
            />
            <Gradient
              colors={['rgba(244, 244, 244, 1)', 'rgba(244, 244, 244, 0)']}
              locations={[0, 1]}
              style={{
                height: 15,
              }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default OppuScreen;
