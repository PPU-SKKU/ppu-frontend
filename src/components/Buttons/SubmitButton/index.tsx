import React from 'react';
import { Pressable } from 'react-native';
import { Text } from '../../Text';
import styles from './styles';

interface SubmitButtonProps {
  backgroundColor?: string;
  textColor?: string;
  label?: string;
  disabled?: boolean;
  onPress?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  backgroundColor = '#242424',
  textColor = '#fff',
  label,
  disabled = true,
  onPress,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: backgroundColor },
        disabled ? { opacity: 0.12 } : null,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text variant="title2" weight="bold" color={textColor}>
        {label}
      </Text>
    </Pressable>
  );
};

export default SubmitButton;
