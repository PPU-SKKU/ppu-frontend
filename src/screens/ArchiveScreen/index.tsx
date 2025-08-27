import React, { useCallback, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import styles from './styles';
import { Text } from '../../components/Text';
import colors from '../../theme/color';
import PerfumeLimeGreen from '../../assets/svgs/perfume_limegreen.svg';
import CreateReviewButton from '../../components/CreateReviewButton';
import ReviewCard from './components/ReviewCard';
import Gradient from '../../components/Gradient';
import ReviewFlatList from './components/ReviewFlatList';

const ArchiveScreen: React.FC = () => {
  const [perfumeReviewList, setPerfumeReviewList] = useState<any[]>([
    {
      id: 'a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78',
      userId: 'user-001-uuid',
      perfume: {
        id: 101,
        koreanName: '아프레 롱뒤',
        originalName: "Apres l'Ondee",
        brandKoreanName: '겔랑',
        brandOriginalName: 'Guerlain',
        image: null,
      },
      testedDate: '2025-01-01',
      isLiked: true,
      score: 5,
      content: '화사하고 은은해서 봄날에 딱 어울리는 향이었어요.',
      wearTested: true,
    },
    {
      id: 'z9y8x7w6-v5u4-3210-tsrq-po987nmlk654',
      userId: 'user-001-uuid',
      perfume: {
        id: 102,
        koreanName: '블루 드 샤넬',
        originalName: 'Bleu de Chanel',
        brandKoreanName: '샤넬',
        brandOriginalName: 'Chanel',
        image: 'https://example.com/images/bleu-de-chanel.png',
      },
      testedDate: '2025-01-10',
      isLiked: false,
      score: 3,
      content: '처음에는 강렬하지만 시간이 지나면 조금 무거운 느낌이 났어요.',
      wearTested: true,
    },
    {
      id: 'm1n2o3p4-q5r6-s7t8-u9v0-wxyz12345678',
      userId: 'user-001-uuid',
      perfume: {
        id: 103,
        koreanName: '라 뉘 드 롱홈',
        originalName: "La Nuit de L'Homme",
        brandKoreanName: '입생로랑',
        brandOriginalName: 'Yves Saint Laurent',
        image: null,
      },
      testedDate: '2025-02-15',
      isLiked: true,
      score: 4,
      content: '은근히 매력적이고 저녁 약속에 잘 어울렸습니다.',
      wearTested: false,
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
          <ReviewFlatList data={perfumeReviewList}></ReviewFlatList>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ArchiveScreen;
