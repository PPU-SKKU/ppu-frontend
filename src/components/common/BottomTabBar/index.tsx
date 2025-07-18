import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tab: {
    flex: 1,
    flexDirection: 'column',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    color: '#A3A9B6',
  },
  addCircle: {
    backgroundColor: '#34618E',
    borderRadius: 100,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 32,
    includeFontPadding: false,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  label: {
    color: '#6B7280',
    fontSize: 14,
  },
});

export default BottomTabBar;
