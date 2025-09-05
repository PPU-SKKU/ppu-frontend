import React from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';

type ToggleProps = {
  onToggle: () => void;
  isOn: boolean;
  toggleOffColor: string;
  toggleOnColor: string;
};

const Toggle: React.FC<ToggleProps> = ({
  onToggle,
  isOn = false,
  toggleOffColor,
  toggleOnColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.toggleContainer,
        { backgroundColor: isOn ? toggleOnColor : toggleOffColor },
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
