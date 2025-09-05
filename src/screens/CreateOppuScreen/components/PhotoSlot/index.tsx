import React from 'react';
import { View, Image, Pressable } from 'react-native';
import styles from './styles';
import IconButton from '../IconButton';
import colors from '../../../../theme/color';

interface PhotoSlotProps {
  image?: string;
  isAddButton?: boolean;
  onPick?: () => void;
  onDelete?: () => void;
}

const PhotoSlot: React.FC<PhotoSlotProps> = ({
  image,
  isAddButton = true,
  onPick = () => {},
  onDelete = () => {},
}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.content} onPress={onPick}>
        {image && (
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        {isAddButton && !image && (
          <IconButton
            icon="plus"
            color={colors.white}
            style={styles.button}
            onPress={onPick}
          />
        )}
      </Pressable>

      {image && (
        <IconButton
          icon="x"
          onPress={onDelete}
          color={colors.white}
          style={styles.deleteButton}
        />
      )}
    </View>
  );
};

export default PhotoSlot;
