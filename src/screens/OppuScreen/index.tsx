import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text } from '../../components/Text';
import styles from './styles';
import ArrowDownIcon from '../../assets/svgs/chevron_down.svg';

const OppuScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text variant="headline" weight="extraBold" style={{ marginRight: 8 }}>
          OPPU
        </Text>
        <View style={styles.monthContainer}>
          <Text variant="headline" weight="extraBold">
            6월
          </Text>
          <ArrowDownIcon width={32} height={32} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OppuScreen;
