import { hexToRgba } from '../utils/\bcolorsUtils';

export interface Tag {
  id: string;
  label?: string;
  color: string;
}

export interface UITag extends Tag {
  backgroundColor: string;
}

export function mapTags(tags: Tag[]): UITag[] {
  return tags.map(tag => ({
    ...tag,
    backgroundColor: hexToRgba(tag.color, 0.12),
  }));
}
