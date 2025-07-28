import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
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
  modal: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#34618E',
  },
  modalText: {
    color: '#34618E',
    fontWeight: 'bold',
  },
  submit: {
    backgroundColor: '#34618E',
  },
});

export default styles;
