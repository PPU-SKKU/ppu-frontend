import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';
import { Text } from '../../components/Text';
import colors from '../../theme/color';
import DefaultPerfumeLimeGreen from '../../assets/svgs/default_perfume_limegreen.svg';
import CreateReviewButton from '../../components/CreateReviewButton';
import Gradient from '../../components/Gradient';
import ReviewFlatList from './components/ReviewFlatList';
import { useNavigation } from '@react-navigation/native';
import { RootNavProp } from '../../types/navigationProps';

const ArchiveScreen: React.FC = () => {
  const [perfumeReviewList, setPerfumeReviewList] = useState<any[]>([]);
  const navigation = useNavigation<RootNavProp>();

  const NavigateToCreateReview = () => {
    navigation.navigate('CreateReview');
  };

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
            <DefaultPerfumeLimeGreen></DefaultPerfumeLimeGreen>
            <Text variant="title1" weight="medium" color={colors.grey54}>
              나만의 시향기를 작성해보세요!
            </Text>
            <CreateReviewButton
              backgroundColor={colors.grey100}
              textColor={colors.white}
              label="시향기 작성하기"
              disabled={false}
              onPress={NavigateToCreateReview}
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
