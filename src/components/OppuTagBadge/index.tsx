import { View } from 'react-native';
import { Tag } from '../../types/tag';
import styles from './style';
import { Text } from '../Text';

interface OppuTagBadgeProps {
  tag: Tag;
}

const OppuTagBadge: React.FC<OppuTagBadgeProps> = ({ tag }) => {
  return (
    <View style={[styles.container, { backgroundColor: tag.color }]}>
      <Text variant="caption1" weight="semiBold">
        {tag.label}
      </Text>
    </View>
  );
};

export default OppuTagBadge;
