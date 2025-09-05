import { View } from 'react-native';
import { UITag } from '../../types/tag';
import styles from './style';
import { Text } from '../Text';
import colors from '../../theme/color';

interface OppuTagBadgeProps {
  tag: UITag;
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
          backgroundColor: selected ? tag.backgroundColor : 'transparent',
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
