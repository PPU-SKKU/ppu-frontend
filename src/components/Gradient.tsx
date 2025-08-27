import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientProps {
  colors: string[];
  locations?: number[];
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

/**
 * Gradient 컴포넌트
 *
 * `react-native-linear-gradient`를 감싼 공통 Wrapper
 *
 * @example 기본 사용법
 * <Gradient colors={['#D4A8FF', '#FFFFFF']} style={{ flex: 1 }}>
 *   <SafeAreaView>
 *     <Text>내용</Text>
 *   </SafeAreaView>
 * </Gradient>
 *
 * @example 위치 비율 지정
 * <Gradient
 *   colors={['#D4A8FF', '#FFFFFF']}
 *   locations={[0, 0.7]}  // 보라색 70%, 나머지 흰색
 * />
 *
 */

const Gradient: React.FC<GradientProps> = ({
  colors,
  locations,
  style,
  children,
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 },
}) => {
  return (
    <LinearGradient
      colors={colors}
      locations={locations}
      start={start}
      end={end}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default Gradient;
