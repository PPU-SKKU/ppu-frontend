import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../../../components/Text';
import colors from '../../../theme/color';

interface TitleHeaderTextProps {
  title: string;
  description?: string;
}

export const TitleHeaderText: React.FC<TitleHeaderTextProps> = ({
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Text variant="title1" weight="bold">
        {title}
      </Text>

      {description && (
        <Text variant="caption1" weight="regular" color={colors.grey54}>
          {description}
        </Text>
      )}
    </View>
  );
};

export const SubtitleHeaderText: React.FC<TitleHeaderTextProps> = ({
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Text variant="bodyCompact" weight="semiBold">
        {title}
      </Text>

      {description && (
        <Text variant="caption1" weight="regular" color={colors.grey54}>
          {description}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
});
