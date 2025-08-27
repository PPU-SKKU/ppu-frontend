import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';
import { Text } from '../../components/Text';
import colors from '../../theme/color';
import PerfumeLimeGreen from '../../assets/svgs/perfume_limegreen.svg';
import CreateReviewButton from '../../components/CreateReviewButton';
import ReviewCard from './components/ReviewCard';
import Gradient from '../../components/Gradient';

const ArchiveScreen: React.FC = () => {
  const [perfumeReviewList, setPerfumeReviewList] = useState<any[]>([]);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Gradient
        colors={[colors.limeGreenLight, colors.white]}
        locations={[0, 1]}
      >
        <View style={styles.header}>
          <Text variant="headline" weight="extraBold">
            PPUCHIVE
          </Text>
        </View>
      </Gradient>
      <View style={styles.container}>
        {perfumeReviewList.length !== 0 ? (
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
          <View style={styles.perfumeReviewListContainer}>
            <ReviewCard></ReviewCard>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ArchiveScreen;
