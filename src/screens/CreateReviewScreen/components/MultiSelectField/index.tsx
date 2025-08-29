import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Text } from '../../../../components/Text';
import colors from '../../../../theme/color';
import SelectTag from '../SelectTag';

interface MultiSelctFieldProps {
  label: string;
  description: string;
  options: string[];
  onSelect: (value: string) => void;
}

const MultiSelectField: React.FC<MultiSelctFieldProps> = ({
  label,
  description,
  options,
  onSelect,
}) => {
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
      <View style={styles.multiSelectTabContainer}>
        {options.map((option, key) => (
          <SelectTag label={option} isSelected={true} key={key}></SelectTag>
        ))}
      </View>
    </View>
  );
};

export default MultiSelectField;
