import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styles from './styles';
//import FeatherIcon from 'react-native-vector-icons/Feather';

const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  return (
    <View style={styles.container}>
      {/* 홈 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('HOME')}
        accessibilityRole="button"
      >
        <Text style={styles.icon}>🗄️</Text>
        <Text style={styles.label}>홈</Text>
      </TouchableOpacity>

      {/* 오뿌 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('OPPU')}
        accessibilityRole="button"
      >
        <Text style={styles.icon}>🗄️</Text>
        <Text style={styles.label}>오뿌</Text>
      </TouchableOpacity>

      {/* Add 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('ADD')}
        accessibilityRole="button"
        activeOpacity={0.8}
      >
        <View style={styles.addCircle}>
          <Text style={styles.addText}>＋</Text>
        </View>
      </TouchableOpacity>

      {/* 시향 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('ARCHIVE')}
        accessibilityRole="button"
      >
        <Text style={styles.icon}>🗄️</Text>
        <Text style={styles.label}>시향</Text>
      </TouchableOpacity>

      {/* 마이 탭 */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('MY')}
        accessibilityRole="button"
      >
        <Text style={styles.icon}>🗄️</Text>
        <Text style={styles.label}>마이</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabBar;
