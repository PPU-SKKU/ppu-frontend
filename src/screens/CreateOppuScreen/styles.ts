import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  perfumeWrapper: {
    padding: 20,
    gap: 20,
  },
  tagWrapper: {},
  photoWrapper: {},
  recordWrapper: {},
  feedbackWrapper: {},
});

export default styles;
