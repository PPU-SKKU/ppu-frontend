// @ts-ignore
const ImagePicker = require('react-native-image-crop-picker');

export type PickedImage = {
  path: string;
  mime: string;
  width: number;
  height: number;
  size: number;
};

/**
 * 갤러리에서 이미지를 여러 장 선택하는 함수입니다.
 * react-native-image-crop-picker를 기반으로 동작합니다.
 *
 * @param maxCount 최대 선택 이미지 수 (기본값: 3)
 * @returns 선택된 이미지 배열. 선택을 취소하거나 실패한 경우 빈 배열 반환
 *
 * 사용 예시:
 *
 * import { pickMultipleImages } from './utils/imagePicker';
 *
 * const handlePick = async () => {
 *   const images = await pickMultipleImages(5);
 *   console.log(images); // [{ path, mime, width, height, size }, ...]
 * };
 */

export async function pickMultipleImages(
  maxCount: number = 3,
): Promise<PickedImage[]> {
  try {
    const images: any = await ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      maxFiles: maxCount,
      cropping: false,
    });

    return Array.isArray(images) ? images : [images];
  } catch (error) {
    console.warn('이미지 선택 실패 또는 취소됨:', error);
    return [];
  }
}
