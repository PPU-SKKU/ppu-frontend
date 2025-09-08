// index.tsx
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { Text } from '../../../../components/Text';
import styles from './styles';
import colors from '../../../../theme/color';
import DefaultPerfumeGrey from '../../../../assets/svgs/default_perfume_grey.svg';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface PerfumeSearchCardProps {
  perfumeImage: string | null;
  perfumeName: string;
  perfumeBrand: string;
  isSelected?: boolean;
  onPress?: () => void;
}

const PerfumeSearchCard: React.FC<PerfumeSearchCardProps> = ({
  perfumeImage,
  perfumeName,
  perfumeBrand,
  isSelected = false,
  onPress,
}) => {
  return (
    <Pressable
      style={[
        styles.perfumeContainer,
        isSelected && { backgroundColor: colors.grey4 },
      ]}
      onPress={onPress}
    >
      <Pressable
        onPress={() => {
          console.log('향수 이미지 클릭');
        }}
      >
        {perfumeImage ? (
          <Image source={{ uri: perfumeImage }} style={styles.perfumeImage} />
        ) : (
          <DefaultPerfumeGrey width={64} height={64} />
        )}
      </Pressable>
      <View style={styles.perfumeInfoSection}>
        <Text variant="title2" weight="semiBold" color={colors.grey100}>
          {perfumeName}
        </Text>
        <Text variant="caption1" weight="regular" color={colors.grey54}>
          {perfumeBrand}
        </Text>
      </View>
      {isSelected && (
        <View style={styles.iconContainer}>
          <EntypoIcon
            name="check"
            size={24}
            color={colors.grey100}
          ></EntypoIcon>
        </View>
      )}
    </Pressable>
  );
};

export default PerfumeSearchCard;
