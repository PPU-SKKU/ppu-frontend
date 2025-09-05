import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Pressable,
  Alert,
  Modal,
  SafeAreaView,
} from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import styles from './styles';
import PhotoItem from './PhotoItem';
import { requestPermission } from './permission';
import { Text } from '../Text';

interface CustomGalleryProps {
  visible: boolean;
  maxSelect?: number;
  initialSelected?: string[];
  onConfirm: (uris: string[]) => void;
  onCancel: () => void;
}

const CustomGallery: React.FC<CustomGalleryProps> = ({
  visible,
  maxSelect = 3,
  initialSelected = [],
  onConfirm,
  onCancel,
}) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [endCursor, setEndCursor] = useState<string | undefined>(undefined);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async () => {
    if (!hasNextPage || loading) return;

    const granted = await requestPermission();
    if (!granted) {
      Alert.alert(
        '권한 필요',
        '사진 접근 권한이 필요합니다. 설정에서 허용해주세요.',
      );
      onCancel();
      return;
    }

    setLoading(true);
    try {
      const result = await CameraRoll.getPhotos({
        first: 50,
        after: endCursor,
        assetType: 'Photos',
        include: ['filename', 'fileSize', 'imageSize'],
      });

      const uris = result.edges
        .map((edge: any) => edge.node.image.uri)
        .filter((uri: string) => uri);

      setPhotos(prev => [...prev, ...uris]);
      setEndCursor(result.page_info.end_cursor);
      setHasNextPage(result.page_info.has_next_page);
    } catch (err) {
      console.warn('사진 불러오기 실패:', err);
      Alert.alert('오류', '사진을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const toggleSelect = (uri: string) => {
    if (selected.includes(uri)) {
      setSelected(selected.filter(item => item !== uri));
    } else if (selected.length < maxSelect) {
      setSelected([...selected, uri]);
    } else {
      Alert.alert(`최대 ${maxSelect}장만 선택 가능합니다.`);
    }
  };

  useEffect(() => {
    if (visible) {
      setPhotos([]);
      setSelected(initialSelected || []);
      setEndCursor(undefined);
      setHasNextPage(true);
      fetchPhotos();
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onCancel}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={onCancel} style={styles.headerButton}>
            <Text variant="body" weight="regular">
              취소
            </Text>
          </Pressable>
          <Text variant="title1" weight="semiBold">
            사진 선택 ({selected.length}/{maxSelect})
          </Text>
          <Pressable
            onPress={() => onConfirm(selected)}
            style={styles.headerButton}
          >
            <Text variant="body" weight="regular">
              확인
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={photos}
          keyExtractor={item => item}
          numColumns={3}
          renderItem={({ item }) => (
            <PhotoItem
              uri={item}
              isSelected={selected.includes(item)}
              index={selected.indexOf(item)}
              onPress={() => toggleSelect(item)}
            />
          )}
          onEndReached={() => hasNextPage && fetchPhotos()}
          onEndReachedThreshold={0.1}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />

        {loading && (
          <View style={styles.loadingContainer}>{/* TODO : 로딩 화면 */}</View>
        )}
      </SafeAreaView>
    </Modal>
  );
};

export default CustomGallery;
