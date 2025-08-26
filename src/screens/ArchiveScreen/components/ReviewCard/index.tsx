import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Text } from '../../../../components/Text';

interface ReviewCardProps {}

const ReviewCard: React.FC<ReviewCardProps> = ({}) => {
  return (
    <View style={styles.reviewCardContainer}>
      <View style={styles.headerSection}>
        <View style={styles.metaInfoSection}>
          <Text>하이</Text>
          <Text>하이</Text>
        </View>
        <Text>하이</Text>
      </View>
    </View>
  );
};

export default ReviewCard;
