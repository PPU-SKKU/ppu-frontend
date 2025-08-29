import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: colors.grey8,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    aspectRatio: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  button: {
    backgroundColor: colors.black,
  },
  deleteButton: {
    position: 'absolute',
    left: -8,
    top: -8,
    backgroundColor: colors.black,
  },
});

export default styles;
