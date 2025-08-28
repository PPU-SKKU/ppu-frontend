import React from 'react';
import { View, StyleSheet, Pressable, ViewStyle } from 'react-native';
import styles from './styles';
import IconButton from '../IconButton';
import { Text } from '../../../../components/Text';

interface StepperProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  style?: ViewStyle;
  disableIncrement?: boolean;
  disableDecrement?: boolean;
}

const Stepper: React.FC<StepperProps> = ({
  count,
  onIncrement,
  onDecrement,
  style,
  disableIncrement = false,
  disableDecrement = false,
}) => {
  return (
    <View style={[styles.container, style]}>
      <IconButton
        icon="minus"
        onPress={onDecrement}
        disabled={disableDecrement}
      />
      <Text variant="bodyCompact" weight="semiBold" style={styles.count}>
        {count.toString()}
      </Text>
      <IconButton
        icon="plus"
        onPress={onIncrement}
        disabled={disableIncrement}
      />
    </View>
  );
};

export default Stepper;
