import React from 'react';
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
  const handlePress = (selectedValue: string) => {
    onSelect(selectedValue); // 선택된 값 state 변경
    setOptions?.(prevOption =>
      prevOption.map(o => ({ ...o, isSelected: o.value === selectedValue })),
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
              label={option.value}
              isSelected={option.isSelected}
              key={key}
              onPress={() => {
                handlePress(option.value);
              }}
            />
          ) : (
            <Segment
              label={option.value}
              isSelected={option.isSelected}
              key={key}
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
