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
  tagWrapper: {
    padding: 20,
    gap: 20,
  },
  photoWrapper: {
    padding: 20,
    gap: 20,
  },
  recordWrapper: {
    padding: 20,
    gap: 16,
  },
  feedbackWrapper: {
    padding: 20,
    gap: 16,
  },
});

export default styles;
