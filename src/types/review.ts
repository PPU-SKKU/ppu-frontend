import { Perfume } from './perfume';

export interface Review {
  id: string;
  userId: string;
  perfume: Perfume;
  testedDate: string;
  isLiked: boolean;
  score: number;
  content: string;
  wearTested: boolean;
}
