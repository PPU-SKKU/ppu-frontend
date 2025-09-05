import React from 'react';
import { View, Pressable, FlatList } from 'react-native';
import { UITag } from '../../../../types/tag';
import styles from './styles';
import { Text } from '../../../../components/Text';
import Feather from 'react-native-vector-icons/Feather';

type TagListProps = {
  tags: UITag[];
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
  const renderItem = ({ item: tag }: { item: UITag }) => {
    const isSelected = selectedTagId === tag.id;
    const hasLabel = !!tag.label;

    return (
      <Pressable
        style={[
          styles.tagItem,
          {
            borderColor: isSelected ? tag.color : 'transparent',
            backgroundColor: tag.backgroundColor,
            width: hasLabel ? undefined : 32,
            height: hasLabel ? undefined : 32,
          },
        ]}
        onPress={() => onSelectTag(tag.id)}
      >
        {hasLabel && (
          <View style={styles.labelContainer}>
            <Text variant="caption1" weight="semiBold" color={tag.color}>
              {tag.label}
            </Text>
            <Pressable
              style={styles.deleteButton}
              onPress={e => {
                e.stopPropagation();
                onDeleteTagLabel(tag.id);
              }}
            >
              <Feather name="x" color={tag.color} />
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
