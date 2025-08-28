import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../../theme/color';
import styles from './styles';

interface IconButtonProps {
  icon: 'x' | 'plus' | 'minus';
  onPress?: () => void;
  disabled?: boolean;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  disabled = false,
  size = 20,
  color = colors.black,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          borderRadius: 22,
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: disabled ? 'transparent' : colors.white,
        },
        style,
        pressed && { opacity: 0.7 },
      ]}
    >
      <Feather
        name={icon}
        size={size}
        color={disabled ? colors.grey39 : color}
      />
    </Pressable>
  );
};

export default IconButton;
