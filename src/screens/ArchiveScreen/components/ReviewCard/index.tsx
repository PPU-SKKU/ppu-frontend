import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Text } from '../../../../components/Text';
import colors from '../../../../theme/color';
import PerfumeLimeGreen from '../../../../assets/svgs/perfume_limegreen.svg';
import HeartIcon from '../../../../assets/svgs/heart.svg';
interface ReviewCardProps {
  date?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({}) => {
  return (
    <View style={styles.reviewCardContainer}>
      <View style={styles.headerSection}>
        <View style={styles.metaInfoSection}>
          <Text variant="caption1" weight="regular" color={colors.grey54}>
            2025년 1월 1일
          </Text>
          <Text variant="caption1" weight="medium" color={colors.grey100}>
            착향
          </Text>
        </View>
        <Text>하이</Text>
      </View>
      <View style={styles.productDetailSection}>
        <PerfumeLimeGreen width={64} height={64}></PerfumeLimeGreen>
        <View style={styles.productInfoSection}>
          <Text variant="title2" weight="semiBold" color={colors.grey100}>
            오 드 빠르펭
          </Text>
          <Text variant="caption1" weight="regular" color={colors.grey54}>
            샤넬
          </Text>
        </View>
        <View style={styles.ratingBadge}>
          <HeartIcon width={16} height={16}></HeartIcon>
          <Text variant="bodyCompact" weight="bold" color={colors.pink}>
            4.0
          </Text>
        </View>
      </View>
      <View style={styles.reviewContentSection}>
        <Text variant="body" weight="regular" color={colors.grey54}>
          향을 맡는 순간 오래전 여름 바다의 기억이 떠올랐다. 튜베로즈의
          고급스러운 꽃향기와 코코넛의 부드러움이 뒤섞여, 해 질 녘의 바람처럼
          아련하고 포근했다. 그 순간, 햇살에 반사된 물결이 눈앞에 아른거리는
          듯했고, 발끝에 스치던 따뜻한 모래의 감촉마저 되살아났다. 짙은 푸른
          바다 너머로 노을이 번지듯, 향은 천천히 퍼져 나와 마음 깊숙한 곳까지
          스며들었다.
        </Text>
      </View>
    </View>
  );
};

export default ReviewCard;
