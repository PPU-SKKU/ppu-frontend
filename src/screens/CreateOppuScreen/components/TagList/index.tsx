import React from 'react';
import { View, Pressable, FlatList } from 'react-native';
import { Tag } from '../../../../types/tag';
import styles from './styles';
import { Text } from '../../../../components/Text';
import Feather from 'react-native-vector-icons/Feather';

type TagListProps = {
  tags: Tag[];
  selectedTagId: string | null;
  onSelectTag: (id: string) => void;
  onDeleteTagLabel: (id: string) => void;
};

export default function TagList({
  tags,
  selectedTagId,
  onSelectTag,
  onDeleteTagLabel,
}: TagListProps) {
  const renderItem = ({ item: tag }: { item: Tag }) => {
    const isSelected = selectedTagId === tag.id;
    const hasLabel = !!tag.label;

    return (
      <Pressable
        style={[styles.tagItem, isSelected && { borderColor: tag.color }]}
        onPress={() => onSelectTag(tag.id)}
      >
        {hasLabel && (
          <View style={styles.labelContainer}>
            <Text>{tag.label}</Text>
            <Pressable
              style={styles.deleteButton}
              onPress={e => {
                e.stopPropagation();
                onDeleteTagLabel(tag.id);
              }}
            >
              <Feather name="x" />
            </Pressable>
          </View>
        )}
      </Pressable>
    );
  };

  return (
    <FlatList
      horizontal
      data={tags}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
      contentContainerStyle={styles.container}
    />
  );
}
