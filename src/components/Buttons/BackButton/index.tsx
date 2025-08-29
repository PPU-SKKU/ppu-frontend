import React from 'react';
import { Pressable, View } from 'react-native';
import styles from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../../../theme/color';

interface BackButtonProps {
  onPress?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FeatherIcon name="chevron-left" size={24} color={colors.grey100} />
    </Pressable>
  );
};

export default BackButton;
