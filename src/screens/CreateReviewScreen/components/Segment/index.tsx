import React from 'react';
import { Pressable, View } from 'react-native';
import styles from './styles';
import colors from '../../../../theme/color';
import { Text } from '../../../../components/Text';

interface SegmentProps {
  icon?: React.ReactNode; //
  label: string;
  isSelected: boolean;
  onPress?: () => void;
}

const Segment: React.FC<SegmentProps> = ({
  icon,
  label,
  isSelected,
  onPress,
}) => {
  return (
    <Pressable
      style={[
        styles.segmentContainer,
        isSelected && { backgroundColor: colors.white },
      ]}
      onPress={onPress}
    >
      {icon && <View>{icon}</View>}
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
