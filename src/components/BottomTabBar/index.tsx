import React from 'react';
import { View, TouchableOpacity, Text as RNText } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import HomeDefaultIcon from '../../assets/svgs/home_default.svg';
import HomeActiveIcon from '../../assets/svgs/home_active.svg';
import OppuDefaultIcon from '../../assets/svgs/oppu_default.svg';
import OppuActiveIcon from '../../assets/svgs/oppu_active.svg';
import PlusIcon from '../../assets/svgs/plus.svg';
import ArchiveDefaultIcon from '../../assets/svgs/archive_default.svg';
import ArchiveActiveIcon from '../../assets/svgs/archive_active.svg';
import MyDefaultIcon from '../../assets/svgs/my_default.svg';
import MyActiveIcon from '../../assets/svgs/my_active.svg';
import { Text } from '../Text';
import styles from './styles';
import colors from '../../theme/color';

const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  return (
    <View style={styles.container}>
      {/* 홈 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('HOME')}
        accessibilityRole="button"
      >
        {state.index === 0 ? (
          <HomeActiveIcon width={24} height={24} />
        ) : (
          <HomeDefaultIcon width={24} height={24} />
        )}
        <Text
          variant="caption2"
          color={state.index === 0 ? colors.grey100 : '#6B7280'}
        >
          홈
        </Text>
      </TouchableOpacity>

      {/* 오뿌 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('OPPU')}
        accessibilityRole="button"
      >
        {state.index === 1 ? (
          <OppuActiveIcon width={24} height={24} />
        ) : (
          <OppuDefaultIcon width={24} height={24} />
        )}
        <Text
          variant="caption2"
          color={state.index === 1 ? colors.grey100 : '#6B7280'}
        >
          오뿌
        </Text>
      </TouchableOpacity>

      {/* Add 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('ADD')}
        accessibilityRole="button"
        activeOpacity={0.8}
      >
        <View style={styles.addCircle}>
          <PlusIcon width={24} height={24}></PlusIcon>
        </View>
      </TouchableOpacity>

      {/* 시향 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('ARCHIVE')}
        accessibilityRole="button"
      >
        {state.index === 3 ? (
          <ArchiveActiveIcon width={24} height={24} />
        ) : (
          <ArchiveDefaultIcon width={24} height={24} />
        )}
        <Text
          variant="caption2"
          color={state.index === 3 ? colors.grey100 : '#6B7280'}
        >
          시향
        </Text>
      </TouchableOpacity>

      {/* 마이 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('MY')}
        accessibilityRole="button"
      >
        {state.index === 4 ? (
          <MyActiveIcon width={24} height={24} />
        ) : (
          <MyDefaultIcon width={24} height={24} />
        )}
        <Text
          variant="caption2"
          color={state.index === 4 ? colors.grey100 : '#6B7280'}
        >
          마이
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabBar;
