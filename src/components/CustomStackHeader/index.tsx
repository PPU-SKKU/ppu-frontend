import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Gradient from '../Gradient';
import { Text } from '../Text';
import colors from '../../theme/color';
import SubmitButton from '../Buttons/SubmitButton';
import BackButton from '../Buttons/BackButton';
import { useNavigation } from '@react-navigation/native';
import { RootNavProp } from '../../types/navigationProps';

interface CustomStackHeaderProps {
  gradientStartColor?: string;
  title?: string;
  disabled?: boolean;
  onPress: () => void;
  onBackPress: () => void;
}

const CustomStackHeader: React.FC<CustomStackHeaderProps> = ({
  gradientStartColor = colors.lightGrey,
  title = '',
  disabled = true,
  onPress,
  onBackPress,
}) => {
  return (
    <Gradient
      colors={[gradientStartColor, colors.lightGrey]}
      locations={[0, 1]}
    >
      <View style={styles.header}>
        <BackButton onPress={onBackPress}></BackButton>
        <Text variant="title2" weight="extraBold">
          {title}
        </Text>
        <SubmitButton
          backgroundColor={colors.grey100}
          textColor={colors.white100}
          label="완료"
          disabled={disabled}
          onPress={onPress}
        ></SubmitButton>
      </View>
    </Gradient>
  );
};

export default CustomStackHeader;
