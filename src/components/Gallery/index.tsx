import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Pressable,
  Alert,
  Modal,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import PhotoItem from './PhotoItem';
import { requestPermission } from '../../utils/permission';
import SubmitButton from '../Buttons/SubmitButton';
import { Text } from '../Text';
import { getPhotos } from '../../services/photoService';

interface CustomGalleryProps {
  visible: boolean;
  maxSelect?: number;
  initialSelected?: string[];
  onConfirm: (uris: string[]) => void;
  onCancel: () => void;
}

const Gallery: React.FC<CustomGalleryProps> = ({
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
      const result = await getPhotos(endCursor);

      const uris = result.edges
        .map((edge: any) => edge.node.image.uri)
        .filter((uri: string) => uri);

      setPhotos(prev => [...prev, ...uris]);
      setEndCursor(result.page_info.end_cursor);
      setHasNextPage(result.page_info.has_next_page);
    } catch (err) {
      console.log('사진 불러오기 실패:', err);
      Alert.alert('오류', '사진을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const toggleSelect = useCallback(
    (uri: string) => {
      if (selected.includes(uri)) {
        setSelected(selected.filter(item => item !== uri));
      } else if (selected.length < maxSelect) {
        setSelected([...selected, uri]);
      } else {
        Alert.alert(`최대 ${maxSelect}장만 선택 가능합니다.`);
      }
    },
    [selected, maxSelect],
  );

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
        <Header
          selectedCount={selected.length}
          maxSelect={maxSelect}
          onCancel={onCancel}
          onConfirm={() => onConfirm(selected)}
        />

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

function Header({
  selectedCount,
  maxSelect,
  onCancel,
  onConfirm,
}: {
  selectedCount: number;
  maxSelect: number;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <View style={styles.header}>
      <Pressable onPress={onCancel} style={styles.headerButton}>
        <Text variant="body" weight="semiBold">
          닫기
        </Text>
      </Pressable>

      <Text variant="title2" weight="semiBold">
        사진 선택 ({selectedCount}/{maxSelect})
      </Text>

      <SubmitButton label="완료" disabled={false} onPress={onConfirm} />
    </View>
  );
}

export default Gallery;
