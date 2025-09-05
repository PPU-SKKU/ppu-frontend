import React, { useMemo, useRef, useState, useCallback } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './styles';
import { Text } from '../../components/Text';
import { TitleHeaderText, SubtitleHeaderText } from './components/HeaderText';
import colors from '../../theme/color';
import Toggle from '../../components/Toggle';
import PerfumeSpray from './components/PerfumeSpray';
import { PerfumeInfo } from '../../types/perfume';
import PhotoSlot from './components/PhotoSlot';
import IconButton from './components/IconButton';
import ClickableOppuTagBadge from '../../components/OppuTagBadge/ClickableOppuTagBadge';
import CustomStackHeader from '../../components/CustomStackHeader';
import { useNavigation } from '@react-navigation/native';
import { RootNavProp } from '../../types/navigationProps';
import Divider from '../../components/Divider';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { AddPerfumeButton } from './components/BaseButton';
import TagSetting from './components/TagSetting';
import { Tag, mapTags } from '../../types/tag';
import CustomGallery from '../../components/Gallery';

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

const dummyTags: Tag[] = [
  { id: '1', label: '오뿌', color: '#AF52DE' },
  { id: '2', label: '잠뿌', color: '#0059FF' },
  { id: '3', label: '뿌', color: '#5856D6' },
  { id: '4', color: '#73BB4B' },
  { id: '5', color: '#FF47D1' },
];

const CreateOppuScreen: React.FC = () => {
  const [perfumes, setPerfumes] = useState<PerfumeInfo[]>(dummyPerfumes);
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [text, setText] = useState('');
  const navigation = useNavigation<RootNavProp>();

  const uiTags = useMemo(() => mapTags(dummyTags), [dummyTags]);
  const [selectedTagId, setSelectedTagId] = useState<string>(uiTags[0].id);

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['80%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const handleDismissModalPress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <BottomSheetModalProvider>
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

            {perfumes.length < 3 && <AddPerfumeButton onPress={() => {}} />}
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
                onPress={handlePresentModalPress}
                style={styles.tagIcon}
              />
            </View>

            <FlatList
              data={uiTags.filter(tag => tag.label && tag.label.trim() !== '')}
              horizontal
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
              renderItem={({ item }) => (
                <ClickableOppuTagBadge
                  tag={item}
                  selected={selectedTagId == item.id}
                  onPress={() => setSelectedTagId(item.id)}
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
                  image={selectedPhotos[i]}
                  isAddButton={i === selectedPhotos.length}
                  onPick={() => {
                    setGalleryVisible(true);
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
              호드백은 향수를 사용했을 때 주변에서 들은 긍정적인 피드백을
              의미해요
            </Text>
          </View>

          <View style={{ height: 78 }} />
        </ScrollView>

        <CustomGallery
          visible={galleryVisible}
          maxSelect={3}
          initialSelected={selectedPhotos}
          onConfirm={uris => {
            setSelectedPhotos(uris);
            setGalleryVisible(false);
          }}
          onCancel={() => setGalleryVisible(false)}
        />

        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          onChange={index => {
            console.log('BottomSheet 상태 변화:', index);
            // index === -1 -> 닫힘
            // index >= 0 -> 열림
          }}
          index={0}
          backgroundStyle={{
            backgroundColor: '#F6F6F6',
          }}
          handleStyle={{
            backgroundColor: '#F6F6F6',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
          backdropComponent={renderBackdrop}
          keyboardBehavior="extend"
          enableDynamicSizing={false}
        >
          <TagSetting
            tags={uiTags}
            onComplete={newTags => {
              console.log('변경된 태그:', newTags);
              handleDismissModalPress();
            }}
          />
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

const Spacer = () => <View style={{ height: 20 }} />;

export default CreateOppuScreen;
