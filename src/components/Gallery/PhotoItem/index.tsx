import React from 'react';
import { Pressable, Image, View } from 'react-native';
import styles from './styles';
import { Text } from '../../Text';

interface PhotoItemProps {
  uri: string;
  isSelected: boolean;
  index: number;
  onPress: (uri: string) => void;
}

const PhotoItem: React.FC<PhotoItemProps> = ({
  uri,
  isSelected,
  index,
  onPress,
}) => (
  <Pressable onPress={() => onPress(uri)} style={styles.imageContainer}>
    <Image source={{ uri }} style={styles.image} resizeMode="cover" />
    {isSelected && (
      <View style={styles.overlay}>
        <View style={styles.checkmark}>
          <Text variant="bodyCompact" weight="semiBold">
            {index + 1}
          </Text>
        </View>
      </View>
    )}
  </Pressable>
);

export default PhotoItem;
