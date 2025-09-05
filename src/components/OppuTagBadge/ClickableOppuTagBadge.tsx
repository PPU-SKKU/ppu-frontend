import { Pressable, View } from 'react-native';
import { UITag } from '../../types/tag';
import OppuTagBadge from '.';

interface ClickableOppuTagBadgeProps {
  tag: UITag;
  selected: boolean;
  onPress: () => void;
}

const ClickableOppuTagBadge: React.FC<ClickableOppuTagBadgeProps> = ({
  tag,
  selected,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <OppuTagBadge tag={tag} selected={selected} />
    </Pressable>
  );
};

export default ClickableOppuTagBadge;
