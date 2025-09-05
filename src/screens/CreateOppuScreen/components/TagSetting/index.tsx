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

  const [isEditing, setIsEditing] = useState(false);
  const [draftLabel, setDraftLabel] = useState('');

  const handleChangeLabel = (text: string) => {
    if (!selectedTagId) return;
    setDraftLabel(text);
    if (isEditing) return;
    setIsEditing(true);
  };

  const handleSelectTag = (id: string) => {
    if (isEditing) {
      // TODO: 경고창
      return;
    }
    const tag = currentTags.find(t => t.id === id);
    setSelectedTagId(id);
    setDraftLabel(tag?.label || '');
  };

  const handleComplete = () => {
    if (!selectedTagId) return;

    setCurrentTags(prev =>
      prev.map(tag =>
        tag.id === selectedTagId ? { ...tag, label: draftLabel } : tag,
      ),
    );

    setIsEditing(false);
    setSelectedTagId(null);
    setDraftLabel('');
  };

  const handleDelete = (id: string) => {
    // 라벨 있는 태그가 1개만 남은 경우 -> 삭제 불가
    const labeledCount = currentTags.filter(
      tag => tag.label && tag.label.trim() !== '',
    ).length;
    if (labeledCount <= 1) {
      // TODO: 경고창
      return;
    }
    // TODO: 삭제 시 경고창 띄우고,
    setCurrentTags(prev =>
      prev.map(tag => (tag.id === id ? { ...tag, label: null } : tag)),
    );

    if (selectedTagId == id) {
      setIsEditing(false);
      setSelectedTagId(null);
      setDraftLabel('');
    }
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
              value={draftLabel || ''}
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
              onSelectTag={id => handleSelectTag(id)}
              onDeleteTagLabel={handleDelete}
            />
          </View>
        </View>

        <CompleteButton
          onPress={() => {
            handleComplete();
            // onComplete(currentTags);
          }}
          disabled={!isEditing || draftLabel.trim() === ''}
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
