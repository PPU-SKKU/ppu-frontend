import React from 'react';
import { View, Pressable, ViewStyle, StyleProp } from 'react-native';
import { Text } from '../../../../components/Text';
import styles from './styles';
import colors from '../../../../theme/color';
import Feather from 'react-native-vector-icons/Feather';

type BaseButtonProps = {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

function BaseButton({
  title,
  onPress,
  icon,
  style,
  disabled,
}: BaseButtonProps) {
  return (
    <Pressable
      style={[
        styles.container,
        style,
        disabled && { backgroundColor: colors.grey12 },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {icon && <View style={styles.iconWrapper}>{icon}</View>}
      <Text
        variant="body"
        weight="semiBold"
        color={disabled ? colors.black : colors.white}
      >
        {title}
      </Text>
    </Pressable>
  );
}

export function AddPerfumeButton({
  onPress,
  style,
  disabled = false,
}: {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}) {
  return (
    <BaseButton
      title="향수 추가"
      onPress={onPress}
      icon={<Feather name="plus" />}
      style={style}
      disabled={disabled}
    />
  );
}

export function CompleteButton({
  onPress,
  style,
  disabled,
}: {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}) {
  return (
    <BaseButton
      title="설정 완료"
      onPress={onPress}
      style={style}
      disabled={disabled}
    />
  );
}
