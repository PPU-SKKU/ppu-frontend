import React, { JSX } from 'react';
import { Pressable, View } from 'react-native';
import styles from './styles';
import { Text } from '../../../../components/Text';
import colors from '../../../../theme/color';

interface StageTagProps {
  icon: JSX.Element;
  label: string;
}

const StateTag: React.FC<StageTagProps> = ({ icon, label }) => {
  return (
    <View style={styles.stateTagContainer}>
      {icon}
      <Text variant="caption1" weight="bold" color={colors.grey100}>
        {label}
      </Text>
    </View>
  );
};

export default StateTag;
