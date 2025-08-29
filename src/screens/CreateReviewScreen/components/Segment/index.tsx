import React from 'react';
import { Pressable } from 'react-native';
import styles from './styles';
import colors from '../../../../theme/color';
import { Text } from '../../../../components/Text';

interface SegmentProps {
  label: string;
  isSelected: boolean;
  onPress?: () => void;
}

const Segment: React.FC<SegmentProps> = ({ label, isSelected, onPress }) => {
  return (
    <Pressable
      style={[
        styles.segmentContainer,
        isSelected && { backgroundColor: colors.white },
      ]}
      onPress={onPress}
    >
      {isSelected ? (
        <Text variant="caption1" weight="bold" color={colors.grey100}>
          {label}
        </Text>
      ) : (
        <Text variant="caption1" weight="medium" color={colors.grey54}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

export default Segment;
