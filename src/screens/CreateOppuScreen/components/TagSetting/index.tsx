import { Pressable, TextInput, View } from 'react-native';
import { UITag } from '../../../../types/tag';
import { useState } from 'react';
import styles from './styles';
import { Text } from '../../../../components/Text';
import { CompleteButton } from '../BaseButton';
import TagList from '../TagList';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

type TagSettingProps = {
  tags: UITag[];
  onComplete: (newTags: UITag[]) => void;
};

function TagSetting({ tags, onComplete }: TagSettingProps) {
  const [currentTags, setCurrentTags] = useState<UITag[]>([...tags]);
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);

  const selectedTag = currentTags.find(tag => tag.id === selectedTagId) || null;

  const handleChangeLabel = (text: string) => {
    if (!selectedTagId) return;
    setCurrentTags(prev =>
      prev.map(tag =>
        tag.id === selectedTagId ? { ...tag, label: text } : tag,
      ),
    );
  };

  let placeholderText = '태그 색상을 먼저 선택해주세요!';
  if (selectedTag) {
    placeholderText = selectedTag.label ? '' : '태그 이름을 설정해주세요!';
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="bodyCompact" weight="semiBold">
          태그 설정
        </Text>
      </View>

      <View style={styles.content}>
        <View>
          <View style={[styles.wrapper, styles.nameWrapper]}>
            <TagLabel label="태그 이름" />

            <Spacer />
            <BottomSheetTextInput
              value={selectedTag?.label || ''}
              placeholder={placeholderText}
              editable={!!selectedTag}
              onChangeText={handleChangeLabel}
              style={[styles.nameInput]}
            />
          </View>

          <Spacer />

          <View style={[styles.wrapper, styles.colorWrapper]}>
            <TagLabel label="태그 색상" />
            <Spacer />
            <TagList
              tags={currentTags}
              selectedTagId={selectedTagId}
              onSelectTag={id => setSelectedTagId(id)}
              onDeleteTagLabel={id => {
                // TODO : 태그 삭제 관련
              }}
            />
          </View>
        </View>

        <CompleteButton
          onPress={() => {
            onComplete(currentTags);
          }}
        />
      </View>
    </View>
  );
}

function TagLabel({ label }: { label: string }) {
  return (
    <Text variant="bodyCompact" weight="semiBold">
      {label}
    </Text>
  );
}

function Spacer({ gap = 20 }: { gap?: number }) {
  return <View style={{ height: gap }} />;
}

export default TagSetting;
