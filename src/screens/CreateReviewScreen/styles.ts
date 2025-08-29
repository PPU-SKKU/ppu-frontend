import { StyleSheet } from 'react-native';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.limeGreenLight,
  },

  bodyContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    gap: 20,
    backgroundColor: colors.lightGrey,
  },
  imageBackgroundContainer: {
    alignSelf: 'stretch',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  perfumeProfileContainer: {
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

  ratingContainer: {},
  ratingLabelSection: {},
  ratingOptions: {},
  ratingDescriptionSection: {},
});

export default styles;
