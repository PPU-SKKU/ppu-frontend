import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native'; // 방금 만든 컴포넌트
import ReviewCard from '../ReviewCard';
import { Review } from '../../../../types/review';
import styles from './styles';

type Props = { data: Review[] };

export default function ReviewFlatList({ data }: Props) {
  const renderItem = useCallback(
    ({ item }: { item: Review }) => (
      <ReviewCard
        testedDate={item.testedDate}
        wearTested={item.wearTested}
        perfumeImage={item.perfume.image}
        perfumeName={item.perfume.koreanName}
        perfumeBrand={item.perfume.brandKoreanName}
        score={item.score}
        content={item.content}
        isLiked={item.isLiked}
      />
    ),
    [],
  );

  const keyExtractor = useCallback((item: Review) => item.id, []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.list}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    />
  );
}
