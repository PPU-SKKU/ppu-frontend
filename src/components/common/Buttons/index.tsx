import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import styles from './styles';

type ButtonSize = 'large' | 'medium' | 'small';

interface ButtonProps {
  size?: ButtonSize;
  backgroundColor?: string;
  textColor?: string;
  label?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
  submit?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  backgroundColor = '#34618E',
  textColor = '#fff',
  label,
  children,
  onPress,
  style,
  disabled = false,
  submit = false,
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
      style={[
        styles.base,
        styles[size],
        { backgroundColor: backgroundColor },
        style,
        disabled && styles.disabled,
        submit && styles.submit,
      ]}
      onPress={onPress} // 추가적인 스타일이 필요하다면
      activeOpacity={0.8}
      disabled={disabled}
    >
      {label ? (
        <Text style={[textSizeStyle, { color: textColor }]}>{label}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Button;
