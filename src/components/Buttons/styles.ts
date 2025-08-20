import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  medium: {
    height: 44,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  small: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  textLarge: {
    fontSize: 18,
    fontWeight: '600',
  },
  textMedium: {
    fontSize: 16,
    fontWeight: '400',
  },
  textSmall: {
    fontSize: 14,
    fontWeight: '400',
  },
  disabled: {
    opacity: 0.5,
  },
  submit: {
    width: '100%',
  },
});

export default styles;
