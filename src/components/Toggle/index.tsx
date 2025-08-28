import React from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import styles from './styles';

type ToggleProps = {
  onToggle: () => void;
  isOn: boolean;
};

const Toggle: React.FC<ToggleProps> = ({ onToggle, isOn = false }) => {
  return (
    <TouchableOpacity
      style={[styles.toggleContainer, isOn && styles.toggleContainerOn]}
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
