export interface Perfume {
  id: number;
  brand: string;
  name: string;
  image: string;
}

export interface PerfumeInfo {
  perfum: Perfume;
  spray: number;
}
