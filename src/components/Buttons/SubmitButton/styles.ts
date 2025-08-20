import { StyleSheet } from 'react-native';
import { isDisabled } from 'react-native/types_generated/Libraries/LogBox/Data/LogBoxData';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 22,
  },
  disabled: {
    opacity: 0.12,
  },
});

export default styles;
