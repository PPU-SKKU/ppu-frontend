import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import BackButton from '../../components/Buttons/BackButton';
import { Text } from '../../components/Text';
import { useNavigation } from '@react-navigation/native';
import { RootNavProp } from '../../types/navigationProps';
import colors from '../../theme/color';
import PerfumeSearchCard from './components/PerfumeSearchCard';
import { DummyEmptyPerfumes, DummyPerfumes } from './dummy';
import SubmitButton from '../../components/Buttons/SubmitButton';
import DefaultPerfumeGrey from '../../assets/svgs/default_perfume_grey.svg';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation<RootNavProp>();
  const onBackPress = () => {
    navigation.goBack();
  };
  const [perfumes, setPerfumes] = useState(
    DummyPerfumes.map(item => ({ ...item, isSelected: false })),
  );
  const [query, setQuery] = React.useState('');
  const toggleIsSelected = (id: number) => {
    setPerfumes(prevPerfumes =>
      prevPerfumes.map(
        item =>
          item.id === id
            ? { ...item, isSelected: !item.isSelected } // 클릭한 아이템 토글
            : { ...item, isSelected: false }, // 나머지는 모두 false
      ),
    );
  };
  const hasSelected = perfumes.some(item => item.isSelected);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <BackButton
          onPress={onBackPress}
          backgroundColor={colors.lightGrey}
        ></BackButton>
        <TextInput
          value={query}
          onChangeText={setQuery}
          style={styles.searchInputContainer}
          placeholder="향수/브랜드명을 입력하세요"
          placeholderTextColor={colors.grey31}
        />
        <SubmitButton
          backgroundColor={colors.grey100}
          textColor={colors.white100}
          label="선택"
          disabled={!hasSelected}
          onPress={() => {
            if (hasSelected) {
              navigation.navigate('CreateReview');
            }
          }}
        ></SubmitButton>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={perfumes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <PerfumeSearchCard
              perfumeImage={item.image}
              perfumeName={item.koreanName}
              perfumeBrand={item.brandKoreanName}
              isSelected={item.isSelected}
              onPress={() => {
                toggleIsSelected(item.id);
              }}
            ></PerfumeSearchCard>
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <DefaultPerfumeGrey></DefaultPerfumeGrey>
              <Text variant="title1" weight="medium" color={colors.grey54}>
                아쉽게도 등록되지 않은 향수에요
              </Text>
              <Pressable
                style={[styles.requestButtonContainer]}
                onPress={() => {}}
              >
                <Text variant="body" weight="semiBold" color={colors.white100}>
                  향수 요청하기
                </Text>
              </Pressable>
            </View>
          }
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          contentContainerStyle={{ padding: 20, gap: 8, flexGrow: 1 }}
          showsHorizontalScrollIndicator={false}
        />
        {/* 하단 고정 버튼 */}
        {/*
          <View style={styles.footerContainer}>
            <Pressable
              style={[
                styles.buttonContainer,
                !hasSelected && { opacity: 0.12 }, // 비활성화 시 색상 변경
              ]}
              disabled={!hasSelected}
              onPress={() => {
                if (hasSelected) {
                  navigation.navigate('CreateReview');
                }
              }}
            >
              <Text variant="body" weight="semiBold" color={colors.white}>
                선택하기
              </Text>
            </Pressable>
          </View>
        */}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
