// index.tsx
import React, { useState, useCallback } from 'react';
import {
  View,
  NativeSyntheticEvent,
  TextLayoutEventData,
  Image,
} from 'react-native';
import styles from './styles';
import { Text } from '../../../../components/Text';
import colors from '../../../../theme/color';
import PerfumeLimeGreen from '../../../../assets/svgs/perfume_limegreen.svg';
import HeartLikeIcon from '../../../../assets/svgs/heart_like.svg';
import HeartUnlikeIcon from '../../../../assets/svgs/heart_unlike.svg';
import MoreOptionsButton from '../../../../components/Buttons/MoreOptionsButton';

const COLLAPSED_LINES = 3;

interface ReviewCardProps {
  testedDate: string;
  wearTested: boolean;
  perfumeImage: string | null;
  perfumeName: string;
  perfumeBrand: string;
  isLiked: boolean;
  score: number;
  content?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  testedDate,
  wearTested,
  perfumeImage = null,
  perfumeName,
  perfumeBrand,
  score,
  content = '',
  isLiked,
}) => {
  const date = new Date(testedDate);
  const formattedDate = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const fullText = content;
  const [expanded, setExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [collapsedText, setCollapsedText] = useState<string>('');
  const [measured, setMeasured] = useState(false);

  // 최초 1회: 실제 줄 배열을 받아 3줄까지만 합쳐 '… 더보기'를 붙여둔다.
  const onTextLayout = useCallback(
    (e: NativeSyntheticEvent<TextLayoutEventData>) => {
      if (measured) return;
      const lines = e.nativeEvent.lines;
      const needMore = lines.length > COLLAPSED_LINES;
      setShowReadMore(needMore);

      if (needMore) {
        const firstThree = lines.slice(0, COLLAPSED_LINES).map(l => l.text);
        // 마지막 줄에서 약간 잘라 공간 확보 후 '… ' 추가
        const last = firstThree[COLLAPSED_LINES - 1] || '';
        const trimmedLast = last.trim().slice(0, Math.max(last.length - 4, 0));
        const joined =
          firstThree.slice(0, COLLAPSED_LINES - 1).join('') + trimmedLast;

        setCollapsedText(joined);
      }
      setMeasured(true);
    },
    [measured],
  );

  return (
    <View style={styles.reviewCardContainer}>
      <View style={styles.headerSection}>
        <View style={styles.metaInfoSection}>
          <Text variant="caption1" weight="regular" color={colors.grey54}>
            {formattedDate}
          </Text>
          {wearTested && (
            <Text variant="caption1" weight="medium" color={colors.grey100}>
              착향
            </Text>
          )}
        </View>
        <MoreOptionsButton
          onPress={() => {
            console.log('옵션 더보기 버튼 누름');
          }}
        ></MoreOptionsButton>
      </View>

      <View style={styles.productDetailSection}>
        {perfumeImage ? (
          <Image source={{ uri: perfumeImage }} style={styles.perfumeImage} />
        ) : (
          <PerfumeLimeGreen width={64} height={64} />
        )}
        <View style={styles.productInfoSection}>
          <Text variant="title2" weight="semiBold" color={colors.grey100}>
            {perfumeName}
          </Text>
          <Text variant="caption1" weight="regular" color={colors.grey54}>
            {perfumeBrand}
          </Text>
        </View>
        {isLiked ? (
          <View style={styles.ratingLikeBadge}>
            <HeartLikeIcon width={16} height={16} />
            <Text variant="bodyCompact" weight="bold" color={colors.pink}>
              {score.toFixed(1)}
            </Text>
          </View>
        ) : (
          <View style={styles.ratingUnlikeBadge}>
            <HeartUnlikeIcon width={16} height={16} />
            <Text variant="bodyCompact" weight="bold" color={colors.grey54}>
              불호
            </Text>
          </View>
        )}
      </View>

      <View style={styles.reviewContentSection}>
        {/* 측정을 위해 한 번 렌더 (숨김 X) */}
        {!measured && (
          <Text
            variant="body"
            weight="regular"
            color={colors.grey54}
            onTextLayout={onTextLayout}
          >
            {fullText}
          </Text>
        )}

        {/* 실제 표시용 */}
        {expanded ? (
          <Text variant="body" weight="regular" color={colors.grey54}>
            {fullText}{' '}
            <Text
              variant="body"
              weight="semiBold"
              onPress={() => setExpanded(false)}
              style={styles.inlineLink}
              accessibilityRole="button"
            >
              접기
            </Text>
          </Text>
        ) : (
          <Text variant="body" weight="regular" color={colors.grey54}>
            {showReadMore ? (
              <>
                {collapsedText}
                {'… '}
                <Text
                  variant="body"
                  weight="semiBold"
                  onPress={() => setExpanded(true)}
                  style={styles.inlineLink}
                  accessibilityRole="button"
                >
                  더보기
                </Text>
              </>
            ) : (
              fullText
            )}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ReviewCard;
