import { Platform, PermissionsAndroid } from 'react-native';

export const requestPermission = async (): Promise<boolean> => {
  try {
    if (Platform.OS === 'ios') {
      return true; // iOS는 Info.plist만 있어도 됨
    } else {
      const version = Number(Platform.Version);
      if (version >= 33) {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        );
        return result === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        );
        return result === PermissionsAndroid.RESULTS.GRANTED;
      }
    }
  } catch (error) {
    console.error('권한 요청 실패:', error);
    return false;
  }
};
