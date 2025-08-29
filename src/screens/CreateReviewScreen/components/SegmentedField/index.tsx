import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Text } from '../../../../components/Text';
import colors from '../../../../theme/color';
import Segment from '../\bSegment';

interface SegmentedFieldProps {
  label: string;
  description: string;
  options: string[];
  value: string;
  onSelect: (value: string) => void;
}

const SegmentedField: React.FC<SegmentedFieldProps> = ({
  label,
  description,
  options,
  value,
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
      <View style={styles.segmentedControlsContainer}>
        {options.map((option, key) =>
          option === value ? (
            <Segment label={option} isSelected={true} key={key} />
          ) : (
            <Segment label={option} isSelected={false} key={key} />
          ),
        )}
      </View>
    </View>
  );
};

export default SegmentedField;
