import React, { useState } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Pressable,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import { Text } from '../../components/Text';
import SubmitButton from '../../components/Buttons/SubmitButton';
import { TitleHeaderText, SubtitleHeaderText } from './components/HeaderText';
import colors from '../../theme/color';
import PlusIcon from '../../assets/svgs/plus.svg';
import Toggle from '../../components/Toggle';
import PerfumeSpray from './components/PerfumeSpray';
import { PerfumeInfo } from '../../types/perfume';
import PhotoSlot from './components/PhotoSlot';
import IconButton from './components/IconButton';
import ClickableOppuTagBadge from '../../components/OppuTagBadge/ClickableOppuTagBadge';
import TextField from '../../components/TextField';
import CustomStackHeader from '../../components/CustomStackHeader';
import { useNavigation } from '@react-navigation/native';
import { RootNavProp } from '../../types/navigationProps';
import Divider from '../../components/Divider';

const dummyPerfume = {
  id: 1,
  brandKoreanName: '톰 포드',
  brandOriginalName: 'Tom Ford',
  koreanName: '블랙 오키드',
  originalName: 'Black Orchid',
  image: 'https://i.ibb.co/kgjsZWMz/Image.png',
};

const dummyPerfumes = [
  {
    id: 1,
    perfume: dummyPerfume,
    spray: 1,
  },
  {
    id: 2,
    perfume: dummyPerfume,
    spray: 3,
  },
];

const dummyPic =
  'https://images.unsplash.com/photo-1756142188854-34b1e9a9e415?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const dummyTags = [
  { id: '1', label: '오뿌', color: '#FF6B6B' },
  { id: '2', label: '잠뿌', color: '#4ECDC4' },
  { id: '3', label: '뿌', color: '#FFD93D' },
];

const CreateOppuScreen: React.FC = () => {
  const [perfumes, setPerfumes] = useState<PerfumeInfo[]>(dummyPerfumes);
  const [photos, setPhotos] = useState<string[]>([dummyPic]);
  const [text, setText] = useState('');
  const navigation = useNavigation<RootNavProp>();

  return (
    <SafeAreaView style={styles.container}>
      <CustomStackHeader
        title="오뿌 작성"
        onPress={() => {}}
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={styles.content}>
        {/* 향수 설정 파트 */}
        <View style={styles.perfumeWrapper}>
          <TitleHeaderText
            title="향수"
            description="오늘 뿌린 향수를 추가하고 횟수를 선택해주세요"
          />

          <Spacer />

          <FlatList
            data={perfumes}
            horizontal
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <PerfumeSpray
                perfume={item.perfume}
                count={item.spray}
                onDelete={() => {}}
                onDecrement={() => {}}
                onIncrement={() => {}}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            contentContainerStyle={{ padding: 8 }}
            showsHorizontalScrollIndicator={false}
          />

          {perfumes.length < 3 && (
            <Pressable style={styles.addPerfumeButton} onPress={() => {}}>
              <PlusIcon />
              <Text variant="body" weight="semiBold" color={colors.white}>
                향수 추가
              </Text>
            </Pressable>
          )}
        </View>

        {/* TODO: 작성 날짜 설정 */}

        <View style={styles.tagWrapper}>
          <View style={styles.tagHeader}>
            <TitleHeaderText
              title="태그"
              description="향수를 잘 표현하는 키워드를 선택해주세요"
            />
            <IconButton
              icon="plus"
              onPress={() => {}}
              style={{ backgroundColor: colors.grey12 }}
            />
          </View>

          <FlatList
            data={dummyTags}
            horizontal
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
            renderItem={({ item }) => (
              <ClickableOppuTagBadge
                tag={item}
                selected={false}
                onPress={() => {}}
              />
            )}
          />
        </View>

        <Spacer />

        <View style={styles.optionalWrapper}>
          <SubtitleHeaderText
            title="사진"
            description="향수와 함께한 오늘의 순간을 사진으로 남겨보세요"
          />

          <View style={styles.photoWrapper}>
            {[0, 1, 2].map(i => (
              <PhotoSlot
                key={i}
                image={photos[i]}
                isAddButton={i === photos.length}
                onPick={() => {
                  // 갤러리 접근
                }}
              />
            ))}
          </View>
        </View>

        <Spacer />

        <View style={styles.optionalWrapper}>
          <SubtitleHeaderText title="기록" />
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={setText}
            placeholder={'향수와 함께한 오늘을 기록하세요'}
            placeholderTextColor={colors.grey31}
            multiline={true}
            numberOfLines={5}
          />
        </View>

        <Spacer />

        <View style={styles.optionalWrapper}>
          <View style={styles.feedbackHeader}>
            <SubtitleHeaderText
              title="호드백 받은 날"
              description="오늘 향수를 뿌리고 반응이 좋았나요?"
            />
            <Toggle
              onToggle={() => {}}
              isOn={false}
              toggleOffColor={colors.grey12}
              toggleOnColor={colors.softPurple}
            />
          </View>
          <Divider />
          <Text variant="caption1" weight="regular" color={colors.grey54}>
            호드백은 향수를 사용했을 때 주변에서 들은 긍정적인 피드백을 의미해요
          </Text>
        </View>

        <View style={{ height: 78 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const Spacer = () => <View style={{ height: 20 }} />;

export default CreateOppuScreen;
