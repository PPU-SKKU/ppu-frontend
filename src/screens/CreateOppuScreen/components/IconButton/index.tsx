import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../../theme/color';
import styles from './styles';

interface IconButtonProps {
  icon: 'x' | 'plus' | 'minus';
  onPress: () => void;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size = 20,
  color = colors.black,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          borderRadius: 22,
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        },
        style,
        pressed && { opacity: 0.7 },
      ]}
    >
      <Feather name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
