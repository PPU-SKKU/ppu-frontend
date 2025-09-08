// CustomDatePicker.tsx
import React from 'react';
import { Pressable, View } from 'react-native';
import RNDatePicker from 'react-native-date-picker';
import styles from './styles';
import { Text } from '../Text';
import colors from '../../theme/color';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface CustomDatePickerProps {
  label: string;
  value: Date;
  onChange: (d: Date) => void;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  minDate?: Date;
  maxDate?: Date;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
  open,
  onOpenChange,
  minDate = new Date(2020, 0, 1),
  maxDate = new Date(value),
}) => {
  const formatted = value.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <View style={styles.datePickerContainer}>
      <View style={styles.labelContainer}>
        <Text variant="bodyCompact" weight="semiBold" color={colors.grey100}>
          {label}
        </Text>
        <Pressable
          style={styles.datePickerButtonContainer}
          onPress={() => onOpenChange(true)}
        >
          <Text variant="bodyCompact" weight="medium" color={colors.grey54}>
            {formatted}
          </Text>
          <EntypoIcon name="chevron-right" size={20} color={colors.grey100} />
        </Pressable>
      </View>

      <RNDatePicker
        modal
        open={open}
        date={value}
        mode="date"
        locale="ko"
        title="날짜 선택"
        confirmText="확인"
        cancelText="취소"
        minimumDate={minDate}
        maximumDate={maxDate}
        onConfirm={d => {
          onChange(d);
          onOpenChange(false);
        }}
        onCancel={() => onOpenChange(false)}
      />
    </View>
  );
};

export default CustomDatePicker;
