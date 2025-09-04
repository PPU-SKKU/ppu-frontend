// index.tsx
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { Text } from '../../../../components/Text';
import styles from './styles';
import colors from '../../../../theme/color';
import DefaultPerfumeLimeGreen from '../../../../assets/svgs/default_perfume_limegreen.svg';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface PerfumeSearchCardProps {
  perfumeImage: string | null;
  perfumeName: string;
  perfumeBrand: string;
  onPress?: () => void;
}

const PerfumeSearchCard: React.FC<PerfumeSearchCardProps> = ({
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
      <Pressable style={styles.chevronRightContainer}>
        <EntypoIcon
          name="chevron-right"
          size={24}
          color={colors.grey100}
        ></EntypoIcon>
      </Pressable>
    </Pressable>
  );
};

export default PerfumeSearchCard;
