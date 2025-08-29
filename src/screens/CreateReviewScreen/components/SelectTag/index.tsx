import React from 'react';
import { Pressable } from 'react-native';
import styles from './styles';
import colors from '../../../../theme/color';
import { Text } from '../../../../components/Text';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface SelectTagProps {
  label: string;
  isSelected: boolean;
  onPress?: () => void;
}

const SelectTag: React.FC<SelectTagProps> = ({
  label,
  isSelected,
  onPress,
}) => {
  return (
    <Pressable
      style={[
        styles.selectTagContainer,
        { backgroundColor: isSelected ? colors.grey100 : colors.grey8 },
      ]}
      onPress={onPress}
    >
      <EntypoIcon
        name="check"
        size={20}
        color={isSelected ? colors.white : colors.grey39}
      ></EntypoIcon>
      {isSelected ? (
        <Text variant="bodyCompact" weight="semiBold" color={colors.white}>
          {label}
        </Text>
      ) : (
        <Text variant="bodyCompact" weight="medium" color={colors.grey39}>
          {label}
        </Text>
      )}
    </Pressable>
  );
};

export default SelectTag;
