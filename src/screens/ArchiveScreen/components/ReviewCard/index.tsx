// index.tsx
import React, { useState, useCallback } from 'react';
import { View, NativeSyntheticEvent, TextLayoutEventData } from 'react-native';
import styles from './styles';
import { Text } from '../../../../components/Text';
import colors from '../../../../theme/color';
import PerfumeLimeGreen from '../../../../assets/svgs/perfume_limegreen.svg';
import HeartIcon from '../../../../assets/svgs/heart.svg';
import MoreOptionsButton from '../../../../components/Buttons/MoreOptionsButton';

const COLLAPSED_LINES = 3;

const ReviewCard: React.FC = () => {
  const fullText =
    '향을 맡는 순간 오래전 여름 바다의 기억이 떠올랐다. 튜베로즈의 고급스러운 꽃향기와 코코넛의 부드러움이 뒤섞여, 해 질 녘의 바람처럼 아련하고 포근했다. 그 순간, 햇살에 반사된 물결이 눈앞에 아른거리는 듯했고, 발끝에 스치던 따뜻한 모래의 감촉마저 되살아났다. 짙은 푸른 바다 너머로 노을이 번지듯, 향은 천천히 퍼져 나와 마음 깊숙한 곳까지 스며들었다.';

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
            2025년 1월 1일
          </Text>
          <Text variant="caption1" weight="medium" color={colors.grey100}>
            착향
          </Text>
        </View>
        <MoreOptionsButton
          onPress={() => {
            console.log('옵션 더보기 버튼 누름');
          }}
        ></MoreOptionsButton>
      </View>

      <View style={styles.productDetailSection}>
        <PerfumeLimeGreen width={64} height={64} />
        <View style={styles.productInfoSection}>
          <Text variant="title2" weight="semiBold" color={colors.grey100}>
            오 드 빠르펭
          </Text>
          <Text variant="caption1" weight="regular" color={colors.grey54}>
            샤넬
          </Text>
        </View>
        <View style={styles.ratingBadge}>
          <HeartIcon width={16} height={16} />
          <Text variant="bodyCompact" weight="bold" color={colors.pink}>
            4.0
          </Text>
        </View>
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
