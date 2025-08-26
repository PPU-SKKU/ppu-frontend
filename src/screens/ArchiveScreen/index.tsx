import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ArchiveScreen: React.FC = () => {
  const [perfumeReviewList, setPerfumeReviewList] = useState<any[]>([]);

  return (
    <>
      {perfumeReviewList.length === 0 ? (
        <View style={styles.container}>
          <Text>나만의 시향기를 작성해보세요!</Text>
        </View>
      ) : (
        <View>
          <Text>작성한 시향기 목록</Text>
          {perfumeReviewList.map((review, index) => (
            <Text key={index}>{review.title}</Text>
          ))}
        </View>
      )}
    </>
  );
};

export default ArchiveScreen;
