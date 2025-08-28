import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    // TODO: 배경색상 변수 지정
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
    gap: 20,
  },
  perfumeWrapper: {
    padding: 20,
  },
  addPerfumeButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderRadius: 16,
    padding: 16,
    backgroundColor: colors.black,
    marginTop: 8,
  },
  tagWrapper: {
    padding: 20,
    gap: 20,
  },
  tagHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionalWrapper: {
    padding: 20,
    gap: 16,
    marginHorizontal: 20,
    backgroundColor: colors.white32,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
  },
  photoWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },

  feedbackHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
