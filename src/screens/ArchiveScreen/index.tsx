import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Button from '../../components/common/Buttons';

const ArchiveScreen: React.FC = () => {
  const [perfumeReviewList, setPerfumeReviewList] = useState<any[]>([]);

  return (
    <>
      {perfumeReviewList.length === 0 ? (
        <View style={styles.container}>
          <Text>나만의 시향기를 작성해보세요!</Text>
          <Button
            size="large"
            label="시향 작성하기"
            backgroundColor="#34618E"
            textColor="#fff"
          ></Button>
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
