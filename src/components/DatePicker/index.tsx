import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import Divider from '../Divider';

interface DatePickerProps {}

const DatePicker: React.FC<DatePickerProps> = ({}) => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.datePickerContainer}>
      <View style={styles.labelContainer}></View>
      <Divider></Divider>
    </View>
  );
};

export default DatePicker;
