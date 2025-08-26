import { Text } from '../../../../components/Text';
import { View } from 'react-native';
import styles from './styles';
import colors from '../../../../theme/color';

const WEEKDAY_LABELS = ['일', '월', '화', '수', '목', '금', '토'];

const WeekDayLabels: React.FC = () => {
  return (
    <View style={styles.weekDayLabelRow}>
      {WEEKDAY_LABELS.map((label, idx) => {
        return (
          <View key={idx} style={styles.weekDayLabelCell}>
            <Text variant="caption1" weight="medium" color={colors.grey54}>
              {label}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default WeekDayLabels;
