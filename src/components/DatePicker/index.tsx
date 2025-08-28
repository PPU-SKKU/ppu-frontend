import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';

interface DatePickerProps {}

const DatePicker: React.FC<DatePickerProps> = ({}) => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.datePickerContainer}>
      <View style={styles.labelContainer}></View>
      <View style={styles.datePickerIndicator}></View>
    </View>
  );
};

export default DatePicker;
