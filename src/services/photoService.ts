// photoService.ts
import { CameraRoll } from '@react-native-camera-roll/camera-roll';

export const getPhotos = async (after?: string) => {
  return await CameraRoll.getPhotos({
    first: 50,
    after,
    assetType: 'Photos',
    include: ['filename', 'fileSize', 'imageSize'],
  });
};
