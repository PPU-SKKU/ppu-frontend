import React from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';

type ToggleProps = {
  onToggle: () => void;
  isOn: boolean;
  isOnBackgroundColor: string;
};

const Toggle: React.FC<ToggleProps> = ({
  onToggle,
  isOn = false,
  isOnBackgroundColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.toggleContainer,
        isOn && { backgroundColor: isOnBackgroundColor },
      ]}
      onPress={onToggle}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.toggleCircle,
          isOn ? styles.toggleCircleOn : styles.toggleCircleOff,
        ]}
      />
    </TouchableOpacity>
  );
};

export default Toggle;
