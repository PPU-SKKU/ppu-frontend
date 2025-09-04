import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Text } from '../../../../components/Text';
import colors from '../../../../theme/color';
import Segment from '../\bSegment';

interface SegmentedFieldProps {
  label: string;
  description: string;
  options: Option[];
  setOptions?: React.Dispatch<React.SetStateAction<Option[]>>;
  value: string;
  onSelect: (value: string) => void;
}

const SegmentedField: React.FC<SegmentedFieldProps> = ({
  label,
  description,
  options,
  setOptions,
  value,
  onSelect,
}) => {
  useEffect(() => {
    console.log('options', options);
  }, [options]);
  const handlePress = (pressedValue: string) => {
    onSelect(pressedValue); // 선택된 값 state 변경
    setOptions?.(prevOption =>
      prevOption.map(o => ({ ...o, isSelected: o.value === pressedValue })),
    );
  };
  return (
    <View style={styles.segmentedFieldContainer}>
      <View style={styles.labelDescriptionContainer}>
        <Text variant="bodyCompact" weight="semiBold" color={colors.grey100}>
          {label}
        </Text>
        <Text variant="caption1" weight="regular" color={colors.grey54}>
          {description}
        </Text>
      </View>
      <View style={styles.segmentedControlsContainer}>
        {options.map((option, key) =>
          option.value === value ? (
            <Segment
              key={option.value}
              label={option.value}
              isSelected={option.isSelected}
              onPress={() => {
                handlePress(option.value);
              }}
            />
          ) : (
            <Segment
              key={option.value}
              label={option.value}
              isSelected={option.isSelected}
              onPress={() => {
                handlePress(option.value);
              }}
            />
          ),
        )}
      </View>
    </View>
  );
};

export default SegmentedField;
