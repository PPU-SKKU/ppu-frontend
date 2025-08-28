import { Pressable, View } from 'react-native';
import { Tag } from '../../types/tag';
import OppuTagBadge from '.';

interface ClickableOppuTagBadgeProps {
  tag: Tag;
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
