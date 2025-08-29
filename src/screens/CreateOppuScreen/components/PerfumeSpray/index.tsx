import { View, Image } from 'react-native';
import { Perfume } from '../../../../types/perfume';
import styles from './styles';
import DefaultPerfumeIcon from '../../../../assets/svgs/default_perfume_pink.svg';
import IconButton from '../IconButton';
import colors from '../../../../theme/color';
import { Text } from '../../../../components/Text';
import React from 'react';
import Stepper from '../Stepper';

interface PerfumeSprayProps {
  perfume: Perfume;
  count: number;
  onDelete: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

const PerfumeSpray: React.FC<PerfumeSprayProps> = ({
  perfume,
  count,
  onDelete,
  onIncrement,
  onDecrement,
}) => {
  return (
    <View style={styles.container}>
      <IconButton icon="x" onPress={onDelete} style={styles.deleteButton} />
      {perfume.image ? (
        <Image
          source={{ uri: perfume.image }}
          style={styles.image}
          resizeMode="contain"
        />
      ) : (
        <DefaultPerfumeIcon width={100} height={100} />
      )}
      <View style={styles.detailWrapper}>
        <View>
          <Text
            variant="caption1"
            weight="semiBold"
            color={colors.grey100}
            style={{ marginBottom: 4 }}
          >
            {perfume.koreanName}
          </Text>
          <Text variant="caption2" weight="regular" color={colors.grey54}>
            {perfume.brandKoreanName}
          </Text>
        </View>
        <View style={{ height: 12 }} />
        <Stepper
          count={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          disableIncrement={count == 10}
          disableDecrement={count == 1}
        />
      </View>
    </View>
  );
};

export default PerfumeSpray;
