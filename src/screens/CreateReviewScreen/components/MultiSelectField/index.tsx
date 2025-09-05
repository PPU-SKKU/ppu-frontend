import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Text } from '../../../../components/Text';
import colors from '../../../../theme/color';
import SelectTag from '../SelectTag';

interface MultiSelectFieldProps {
  label: string;
  description: string;
  options: Option[];
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
}

const MultiSelectField: React.FC<MultiSelectFieldProps> = ({
  label,
  description,
  options,
  setOptions,
}) => {
  const handlePress = (pressedValue: string) => {
    setOptions(prev =>
      prev.map(o =>
        o.value === pressedValue ? { ...o, isSelected: !o.isSelected } : o,
      ),
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
      <View style={styles.multiSelectTabContainer}>
        {options.map((option, key) => (
          <SelectTag
            key={option.value}
            label={option.value}
            isSelected={option.isSelected}
            onPress={() => handlePress(option.value)}
          ></SelectTag>
        ))}
      </View>
    </View>
  );
};

export default MultiSelectField;
