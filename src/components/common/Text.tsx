import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import {
  typography,
  fontFamilies,
  Variant,
  Weight,
} from '../../theme/typography';

interface Props extends TextProps {
  variant?: Variant;
  weight?: Weight;
  color?: string;
}

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
