export const fontFamilies = {
  regular: 'Pretendard-Regular',
  medium: 'Pretendard-Medium',
  semiBold: 'Pretendard-SemiBold',
  bold: 'Pretendard-Bold',
  extraBold: 'Pretendard-ExtraBold',
} as const;

export type Weight = keyof typeof fontFamilies;

export const typography = {
  headline: { fontSize: 32, lineHeight: 44, letterSpacing: -1.0 },
  title1: { fontSize: 20, lineHeight: 24, letterSpacing: -1.0 },
  title2: { fontSize: 18, lineHeight: 22, letterSpacing: -1.0 },
  body: { fontSize: 16, lineHeight: 24, letterSpacing: -1.0 },
  bodyCompact: { fontSize: 16, lineHeight: 20, letterSpacing: -1.0 },
  caption1: { fontSize: 14, lineHeight: 16, letterSpacing: -1.0 },
  caption2: { fontSize: 12, lineHeight: 14, letterSpacing: -0.5 },
  tabbarTitle: { fontSize: 11, lineHeight: 14, letterSpacing: 0 },
};

export type Variant = keyof typeof typography;
