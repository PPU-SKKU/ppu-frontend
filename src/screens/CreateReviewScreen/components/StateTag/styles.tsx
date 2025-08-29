import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  stateTagContainer: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    borderRadius: 16,
    backgroundColor: colors.grey8,
    // backdrop-filter: blur(4px); // 추후 구현 필요
  },
});

export default styles;
