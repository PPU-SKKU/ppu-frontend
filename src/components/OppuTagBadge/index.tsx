import { View } from 'react-native';
import { Tag } from '../../types/tag';
import styles from './style';
import { Text } from '../Text';
import colors from '../../theme/color';

interface OppuTagBadgeProps {
  tag: Tag;
  selected?: boolean;
}

const OppuTagBadge: React.FC<OppuTagBadgeProps> = ({
  tag,
  selected = true,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: selected ? tag.color + '80' : colors.grey4,
          borderColor: selected ? tag.color : colors.grey8,
        },
      ]}
    >
      <Text
        variant="caption1"
        weight="semiBold"
        color={selected ? tag.color : colors.grey54}
      >
        {tag.label}
      </Text>
    </View>
  );
};

export default OppuTagBadge;
