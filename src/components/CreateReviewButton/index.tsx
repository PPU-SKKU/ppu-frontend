import React from 'react';
import { Pressable } from 'react-native';
import styles from './styles';
import colors from '../../theme/color';
import { Text } from '../Text';
import PlusIcon from '../../assets/svgs/plus.svg';

interface CreateReviewButtonProps {
  backgroundColor?: string;
  textColor?: string;
  label?: string;
  disabled?: boolean;
  onPress?: () => void;
}

const CreateReviewButton: React.FC<CreateReviewButtonProps> = ({
  backgroundColor = colors.grey100,
  textColor = colors.white100,
  label,
  disabled = false,
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
      <PlusIcon></PlusIcon>
      <Text variant="body" weight="semiBold" color={textColor}>
        {label}
      </Text>
    </Pressable>
  );
};

export default CreateReviewButton;
