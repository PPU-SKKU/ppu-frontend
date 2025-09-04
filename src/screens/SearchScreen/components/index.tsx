// index.tsx
import React, { useState, useCallback } from 'react';
import { Image, Pressable, View } from 'react-native';
import styles from './styles';
import { Text } from '../../../components/Text';
import colors from '../../../theme/color';
import DefaultPerfumeLimeGreen from '../../../assets/svgs/default_perfume_limegreen.svg';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface PerfumeCardProps {
  perfumeImage: string | null;
  perfumeName: string;
  perfumeBrand: string;
  onPress?: () => void;
}

const PerfumeCard: React.FC<PerfumeCardProps> = ({
  perfumeImage,
  perfumeName,
  perfumeBrand,
  onPress,
}) => {
  return (
    <Pressable style={styles.perfumeContainer} onPress={onPress}>
      {perfumeImage ? (
        <Image source={{ uri: perfumeImage }} style={styles.perfumeImage} />
      ) : (
        <DefaultPerfumeLimeGreen width={64} height={64} />
      )}
      <View style={styles.perfumeInfoSection}>
        <Text variant="title2" weight="semiBold" color={colors.grey100}>
          {perfumeName}
        </Text>
        <Text variant="caption1" weight="regular" color={colors.grey54}>
          {perfumeBrand}
        </Text>
      </View>
      <View style={styles.chevronRightContainer}>
        <EntypoIcon
          name="chevron-right"
          size={24}
          color={colors.grey100}
        ></EntypoIcon>
      </View>
    </Pressable>
  );
};

export default PerfumeCard;
