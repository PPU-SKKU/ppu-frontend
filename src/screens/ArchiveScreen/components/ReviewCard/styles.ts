// styles.ts
import { StyleSheet } from 'react-native';
import colors from '../../../../theme/color';

const styles = StyleSheet.create({
  reviewCardContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    gap: 16,
    alignSelf: 'stretch',
    borderRadius: 20,
    backgroundColor: colors.white32,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  metaInfoSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
  },
  productDetailSection: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 12,
  },
  productInfoSection: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 4,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 83, 126, 0.12)',
  },
  reviewContentSection: {},
  inlineLink: {
    textDecorationLine: 'underline',
    color: colors.grey54,
    fontWeight: '600',
  },
});

export default styles;
