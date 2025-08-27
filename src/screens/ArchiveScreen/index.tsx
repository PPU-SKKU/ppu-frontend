import React, { useCallback, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
import { Text } from '../../components/Text';
import colors from '../../theme/color';
import PerfumeLimeGreen from '../../assets/svgs/perfume_limegreen.svg';
import CreateReviewButton from '../../components/CreateReviewButton';
import ReviewCard from './components/ReviewCard';
import Gradient from '../../components/Gradient';

const ArchiveScreen: React.FC = () => {
  const [perfumeReviewList, setPerfumeReviewList] = useState<any[]>([
    {
      id: 'a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78',
      userId: 'user-001-uuid',
      perfumeId: 101,
      perfumeName: '오 드 빠르펭',
      perfumeBrand: '샤넬',
      testedDate: '2025-01-01',
      isLiked: false,
      score: 4,
      content:
        '향을 맡는 순간 오래전 여름 바다의 기억이 떠올랐다. 튜베로즈의 고급스러운 꽃향기와 코코넛의 부드러움이 뒤섞여, 해 질 녘의 바람처럼 아련하고 포근했다. 그 순간, 햇살에 반사된 물결이 눈앞에 아른거리는 듯했고, 발끝에 스치던 따뜻한 모래의 감촉마저 되살아났다. 짙은 푸른 바다 너머로 노을이 번지듯, 향은 천천히 퍼져 나와 마음 깊숙한 곳까지 스며들었다.',
      wearTested: true,
    },
    {
      id: 'z9y8x7w6-v5u4-3210-ts98-rq76po54nm32',
      userId: 'user-002-uuid',
      perfumeId: 102,
      perfumeName: '향수 2',
      perfumeBrand: '브랜드 2',
      testedDate: '2025-01-03',
      isLiked: false,
      score: 2,
      content:
        '첫 향은 상쾌했지만 시간이 지나면서 무거운 잔향이 남아 제 취향에는 맞지 않았다.',
      wearTested: false,
    },
    {
      id: 'm1n2b3v4-c5x6-7890-qw12-er34ty56ui78',
      userId: 'user-003-uuid',
      perfumeId: 103,
      perfumeName: '향수 3',
      perfumeBrand: '브랜드 3',
      testedDate: '2025-01-05',
      isLiked: true,
      score: 5,
      content:
        '달콤하면서도 세련된 향이 오래 지속돼서 특별한 날에 쓰기 좋은 향수라고 느꼈다.',
      wearTested: true,
    },
  ]);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Gradient
        colors={[colors.limeGreenLight, colors.lightGrey]}
        locations={[0, 1]}
      >
        <View style={styles.header}>
          <Text variant="headline" weight="extraBold">
            PPUCHIVE
          </Text>
        </View>
      </Gradient>
      <View style={styles.container}>
        {perfumeReviewList.length === 0 ? (
          <View style={styles.emptyContainer}>
            <PerfumeLimeGreen></PerfumeLimeGreen>
            <Text variant="title1" weight="medium" color={colors.grey54}>
              나만의 시향기를 작성해보세요!
            </Text>
            <CreateReviewButton
              backgroundColor={colors.grey100}
              textColor={colors.white}
              label="시향기 작성하기"
              disabled={false}
              onPress={() => {
                console.log('시향기 작성하기');
              }}
            ></CreateReviewButton>
          </View>
        ) : (
          // 시향기 리스트
          <ScrollView
            style={styles.perfumeReviewListContainer}
            contentContainerStyle={styles.perfumeReviewContent}
          >
            {perfumeReviewList.map(review => (
              <ReviewCard
                testedDate={review.testedDate}
                wearTested={review.wearTested}
                perfumeName={review.perfumeName}
                perfumeBrand={review.perfumeBrand}
                score={review.score}
                isLiked={review.isLiked}
                content={review.content}
              ></ReviewCard>
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ArchiveScreen;
