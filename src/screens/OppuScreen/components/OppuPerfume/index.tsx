import { Image, View } from 'react-native';
import styles from './styles';
import { Text } from '../../../../components/Text';
import { Perfume } from '../../../../types/perfume';
import colors from '../../../../theme/color';

interface OppuPerfumeProps {
  perfume: Perfume;
  spray: number;
}

const DEFAULT_SPARY_COUNT = 1;

const OppuPerfume: React.FC<OppuPerfumeProps> = ({
  perfume,
  spray = DEFAULT_SPARY_COUNT,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text variant="title2" weight="semiBold">
          {perfume.koreanName}
        </Text>
        <Text variant="caption2" weight="medium" color={colors.grey54}>
          {perfume.brandKoreanName}
        </Text>
      </View>
      <View style={styles.perfumeWrapper}>
        <Image source={{ uri: perfume.image ?? '' }} style={styles.image} />

        <View style={styles.sprayBadge}>
          <Text variant="caption1" weight="semiBold" color={colors.white}>
            ×{spray}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OppuPerfume;
