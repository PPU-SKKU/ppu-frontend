export interface Perfume {
  id: number;
  koreanName: string;
  originalName: string;
  brandKoreanName: string;
  brandOriginalName: string;
  image: string | null;
}

export interface PerfumeInfo {
  perfum: Perfume;
  spray: number;
}
