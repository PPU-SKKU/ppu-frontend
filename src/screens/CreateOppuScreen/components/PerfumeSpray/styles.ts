import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'baseline',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.80)',
    backgroundColor: colors.white32,
  },
  image: {
    width: 150,
    height: 150,
  },
  deleteButton: {
    position: 'absolute',
    left: -8,
    top: -8,
    backgroundColor: colors.grey12,
  },
  detailWrapper: {
    marginTop: -20,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
});

export default styles;
