import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  perfumeProfileContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
  perfumeImageContainer: {
    alignSelf: 'stretch',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  perfumeOverViewContainer: {
    marginTop: -120,
    alignSelf: 'stretch',
    gap: 20,
    flexDirection: 'column',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.white40,
    // backdrop-filter: blur(4px); //
  },
  perfumeDetailContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },
  perfumeInfoSection: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
  },
  perfumeStatusTagSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  perfumePreferenceContainer: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  segmentedControlsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 22,
    backgroundColor: colors.grey8,
  },
});

export default styles;
