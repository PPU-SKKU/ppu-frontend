import React from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import styles from './styles';
import BackButton from '../../components/Buttons/BackButton';
import { Text } from '../../components/Text';
import { useNavigation } from '@react-navigation/native';
import { RootNavProp } from '../../types/navigationProps';
import colors from '../../theme/color';
import PerfumeSearchCard from './components/PerfumeSearchCard';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation<RootNavProp>();
  const onBackPress = () => {
    navigation.goBack();
  };
  const [query, setQuery] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton
          onPress={onBackPress}
          backgroundColor={colors.lightGrey}
        ></BackButton>
        <TextInput
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
          placeholder="검색어를 입력하세요"
          placeholderTextColor={colors.grey31}
        />
      </View>
      <View style={styles.perfumeSearchCardContainer}>
        <PerfumeSearchCard
          perfumeImage=""
          perfumeName="오 드 빠르펭"
          perfumeBrand="샤넬"
          onPress={() => {
            console.log('향수 아이템 눌림');
          }}
        ></PerfumeSearchCard>
        <PerfumeSearchCard
          perfumeImage=""
          perfumeName="오 드 빠르펭"
          perfumeBrand="샤넬"
          onPress={() => {
            console.log('향수 아이템 눌림');
          }}
        ></PerfumeSearchCard>
        <PerfumeSearchCard
          perfumeImage=""
          perfumeName="오 드 빠르펭"
          perfumeBrand="샤넬"
          onPress={() => {
            console.log('향수 아이템 눌림');
          }}
        ></PerfumeSearchCard>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
