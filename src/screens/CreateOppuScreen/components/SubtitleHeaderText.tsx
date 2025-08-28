import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../../../components/Text';
import colors from '../../../theme/color';

interface SubtitleHeaderTextProps {
  title: string;
  description: string;
}

const SubtitleHeaderText: React.FC<SubtitleHeaderTextProps> = ({
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Text variant="title1" weight="bold">
        {title}
      </Text>
      <Text variant="caption1" weight="regular" color={colors.grey54}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
});

export default SubtitleHeaderText;
