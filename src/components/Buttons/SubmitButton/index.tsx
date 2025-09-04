import React from 'react';
import { Pressable } from 'react-native';
import { Text } from '../../Text';
import styles from './styles';
import colors from '../../../theme/color';

interface SubmitButtonProps {
  backgroundColor?: string;
  textColor?: string;
  label?: string;
  disabled?: boolean;
  onPress?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  backgroundColor = colors.grey100,
  textColor = colors.white100,
  label,
  disabled = true,
  onPress,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: backgroundColor },
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text variant="body1" weight="bold" color={textColor}>
        {label}
      </Text>
    </Pressable>
  );
};

export default SubmitButton;
