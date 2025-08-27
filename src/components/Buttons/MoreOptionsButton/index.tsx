import React from 'react';
import { Pressable, View } from 'react-native';
import styles from './styles';
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../../../theme/color';
interface MoreOptionsButtonProps {
  onPress?: () => void;
}

const MoreOptionsButton: React.FC<MoreOptionsButtonProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FeatherIcon name="more-horizontal" size={24} color={colors.grey100} />
    </Pressable>
  );
};

export default MoreOptionsButton;
