import { FlatList, View } from 'react-native';
import { Tag } from '../../../../types/tag';
import { PerfumeInfo } from '../../../../types/perfume';
import styles from './styles';
import ImagePager from '../../../../components/ImagePager';
import OppuTagBadge from '../../../../components/OppuTagBadge';
import { Text } from '../../../../components/Text';
import OppuPerfume from '../OppuPerfume';

export interface OppuItemProps {
  tag: Tag;
  perfumes: PerfumeInfo[];
  photos?: string[];
  record?: string;
}

const OppuItem: React.FC<OppuItemProps> = ({
  tag,
  perfumes,
  photos,
  record,
}) => {
  return (
    <View style={styles.container}>
      {photos?.length ? (
        <View style={styles.imageWrapper}>
          <ImagePager images={photos} />
        </View>
      ) : null}

      <View style={styles.contentWrapper}>
        <OppuTagBadge tag={tag} />
        <Text variant="body" weight="medium">
          {record}
        </Text>
      </View>

      <View style={styles.divider} />

      <FlatList
        style={styles.perfumesWrapper}
        data={perfumes}
        scrollEnabled={false}
        keyExtractor={(item, index) => item.perfum.id.toString() + index}
        renderItem={({ item }) => (
          <OppuPerfume perfume={item.perfum} spray={item.spray} />
        )}
        contentContainerStyle={styles.perfumesWrapper}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
      />
    </View>
  );
};

export default OppuItem;
