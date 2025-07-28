import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import styles from './styles';

type ButtonSize = 'large' | 'medium' | 'small';

interface GeneralButtonProps {
  size?: ButtonSize;
  backgroundColor?: string;
  textColor?: string;
  label?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}

const GeneralButton: React.FC<GeneralButtonProps> = ({
  size = 'medium',
  backgroundColor = '#34618E',
  textColor = '#fff',
  label,
  children,
  onPress,
  style,
}) => {
  // size에 따라 텍스트 스타일 결정
  const textSizeStyle =
    size === 'large'
      ? styles.textLarge
      : size === 'small'
      ? styles.textSmall
      : styles.textMedium;

  return (
    <TouchableOpacity
      style={[styles.base, styles[size], { backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {label ? (
        <Text style={[textSizeStyle, { color: textColor }]}>{label}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default GeneralButton;
