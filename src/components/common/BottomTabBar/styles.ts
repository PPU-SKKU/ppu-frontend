import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    color: '#A3A9B6',
  },
  addCircle: {
    backgroundColor: '#34618E',
    borderRadius: 100,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 32,
    includeFontPadding: false,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  label: {
    color: '#6B7280',
    fontSize: 12,
  },
  activeLabel: {
    color: '#34618E',
  },
});

export default styles;
