import { PermissionsAndroid } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export const requestCameraPermission = async () => {
    try {
      const cameraPermissionStatus = await check(PERMISSIONS.ANDROID.CAMERA);
      if (cameraPermissionStatus === RESULTS.GRANTED) {
        // Camera permission already granted
        return;
      }
  
      const granted = await request(PERMISSIONS.ANDROID.CAMERA);
      if (granted === RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.log('Failed to request camera permission: ', error);
    }
  };
  