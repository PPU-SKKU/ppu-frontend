import React, { useMemo, useState } from 'react';
import {
  View,
  SafeAreaView,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Text } from '../../components/Text';
import styles from './styles';
import ArrowDownIcon from '../../assets/svgs/chevron_down.svg';
import WeeklyCalendar from './components/WeeklyCalendar';
import { Week, buildWeeksForMonth } from './components/dateUtils';
import MonthlyCalendar from './components/MonthlyCalendar';
import Gradient from '../../components/Gradient';
import colors from '../../theme/color';
import OppuItem from './components/OppuItem';
import { dummyList } from './Dummy';
import MoreOptionsButton from '../../components/Buttons/MoreOptionsButton';
import CreateReviewButton from '../../components/CreateReviewButton';
import DefaultPerfume from '../../assets/svgs/default_perfume_pink.svg';
import { BlurView } from '@react-native-community/blur';

const OppuScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isMonthView, setIsMonthView] = useState(false);
  const [oppuItems, setItems] = useState(dummyList);

  const monthWeeks = useMemo(
    () => buildWeeksForMonth(selectedDate),
    [selectedDate],
  );

  const filteredItems = useMemo(() => {
    return oppuItems.filter(
      item => item.date.toDateString() === selectedDate.toDateString(),
    );
  }, [oppuItems, selectedDate]);

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
          <View style={styles.moreOptionButton}>
            <MoreOptionsButton
              onPress={() => {
                // TODO: 태그 설정 페이지 이동
              }}
            />
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
        data={filteredItems}
        keyExtractor={(item, index) => index.toString() + item.date}
        renderItem={({ item }) => (
          <OppuItem
            date={item.date}
            tag={item.tag}
            perfumes={item.perfumes}
            photos={item.photos}
            record={item.record}
          />
        )}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <CalendarHeader
            monthWeeks={monthWeeks}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
        }
        ListEmptyComponent={<EmptyScreen onButtonClicked={() => {}} />}
      />
    </SafeAreaView>
  );
};

const CalendarHeader: React.FC<{
  monthWeeks: Week[];
  selectedDate: Date;
  onSelectDate: (d: Date) => void;
}> = ({ monthWeeks, selectedDate, onSelectDate }) => (
  <View style={styles.weekCalendarWrapper}>
    <View>
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="light"
        blurAmount={10}
        reducedTransparencyFallbackColor="white"
      />
      <Gradient
        colors={['#F4F4F4', 'rgba(244, 244, 244, 0.4)']}
        locations={[0, 0.8]}
        style={StyleSheet.absoluteFill}
      />
      <WeeklyCalendar
        monthWeeks={monthWeeks}
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
      />
    </View>
    <Gradient
      colors={['rgba(244, 244, 244, 0.6)', 'rgba(244, 244, 244, 0)']}
      locations={[0, 0.8]}
      style={{ height: 10 }}
    />
  </View>
);

const EmptyScreen: React.FC<{ onButtonClicked: () => void }> = ({
  onButtonClicked,
}) => {
  return (
    <View style={styles.emptyWrapper}>
      <DefaultPerfume />
      <Text variant="title1" weight="medium" color={colors.grey54}>
        오늘 어떤 향수를 뿌리셨나요?
      </Text>
      <CreateReviewButton
        label="오뿌 작성하기"
        textColor={colors.white}
        onPress={onButtonClicked}
      />
    </View>
  );
};

export default OppuScreen;
