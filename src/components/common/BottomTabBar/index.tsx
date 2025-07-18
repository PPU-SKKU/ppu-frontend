import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import styles from './styles';

const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  return (
    <View style={styles.container}>
      {/* 홈 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('HOME')}
        accessibilityRole="button"
      >
        <FeatherIcon
          name="home"
          size={20}
          color={state.index === 0 ? '#34618E' : '#A3A9B6'}
        />
        <Text style={[styles.label, state.index === 0 && styles.activeLabel]}>
          홈
        </Text>
      </TouchableOpacity>

      {/* 오뿌 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('OPPU')}
        accessibilityRole="button"
      >
        <FontAwesomeIcon
          name="spray-can-sparkles"
          size={20}
          color={state.index === 1 ? '#34618E' : '#A3A9B6'}
        />
        <Text style={[styles.label, state.index === 1 && styles.activeLabel]}>
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
          <FeatherIcon name="plus" size={32} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* 시향 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('ARCHIVE')}
        accessibilityRole="button"
      >
        <FeatherIcon
          name="archive"
          size={20}
          color={state.index === 3 ? '#34618E' : '#A3A9B6'}
        />
        <Text style={[styles.label, state.index === 3 && styles.activeLabel]}>
          시향
        </Text>
      </TouchableOpacity>

      {/* 마이 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('MY')}
        accessibilityRole="button"
      >
        <FeatherIcon
          name="user"
          size={20}
          color={state.index === 4 ? '#34618E' : '#A3A9B6'}
        />
        <Text style={[styles.label, state.index === 4 && styles.activeLabel]}>
          마이
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabBar;
