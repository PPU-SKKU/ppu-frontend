import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { typography, fontFamilies, Variant, Weight } from '../theme/typography';

interface Props extends TextProps {
  variant?: Variant;
  weight?: Weight;
  color?: string;
}

/**
 *
 * variant(타입) + weight(굵기) 조합 적용
 *
 * Example :
 *
 * ```tsx
 * // 헤드라인 ExtraBold (32/44/-1.0%)
 * <Text variant="headline" weight="extraBold">
 *   헤드라인 ExtraBold
 * </Text>
 * ```
 */

export const Text = ({
  variant = 'body',
  weight = 'regular',
  color = '#000',
  style,
  ...rest
}: Props) => {
  const base = typography[variant];
  return (
    <RNText
      style={[
        {
          fontSize: base.fontSize,
          lineHeight: base.lineHeight,
          letterSpacing: base.letterSpacing,
          fontFamily: fontFamilies[weight],
          color,
        },
        style,
      ]}
      {...rest}
    />
  );
};
