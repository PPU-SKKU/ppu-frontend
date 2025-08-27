import { Image, View } from 'react-native';
import styles from './style';
import { useRef, useState } from 'react';
import PagerView from 'react-native-pager-view';
import { Text } from '../Text';
import colors from '../../theme/color';

interface ImagePagerProps {
  images: string[];
}

const ImagePager: React.FC<ImagePagerProps> = ({ images }) => {
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <View style={[styles.container]}>
      <View style={styles.pageIndicator}>
        <Text variant="bodyCompact" weight="medium" color={colors.white100}>
          {currentPage + 1}
        </Text>
        <Text variant="bodyCompact" weight="medium" color={colors.white70}>
          /
        </Text>
        <Text variant="bodyCompact" weight="medium" color={colors.white70}>
          {images.length}
        </Text>
      </View>

      <PagerView
        style={styles.pager}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={e => setCurrentPage(e.nativeEvent.position)}
      >
        {images.map((uri, idx) => (
          <Image
            key={idx}
            source={{
              uri: encodeURI(
                'https://images.unsplash.com/photo-1756142188854-34b1e9a9e415?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              ),
            }}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </PagerView>
    </View>
  );
};

export default ImagePager;
