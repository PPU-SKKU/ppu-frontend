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
};

function BaseButton({ title, onPress, icon, style }: BaseButtonProps) {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      {icon && <View style={styles.iconWrapper}>{icon}</View>}
      <Text variant="body" weight="semiBold" color={colors.white}>
        {title}
      </Text>
    </Pressable>
  );
}

export function AddPerfumeButton({
  onPress,
  style,
}: {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <BaseButton
      title="향수 추가"
      onPress={onPress}
      icon={<Feather name="plus" />}
      style={style} // 스타일 전달
    />
  );
}

export function CompleteButton({
  onPress,
  style,
}: {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}) {
  return <BaseButton title="완료" onPress={onPress} style={style} />;
}
