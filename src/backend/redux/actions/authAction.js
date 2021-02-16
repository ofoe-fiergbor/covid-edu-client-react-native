import firebase from "../../firebase/config";
import * as Google from "expo-google-app-auth";
import keys from "../../firebase/keys";
import types from '../types'

export const loginWithGoogle = () => {
  return async (dispatch) => {
    try {
      const result = await Google.logInAsync({
        androidClientId: keys.ANDROID_CLIENT_ID,
        iosClientId: keys.IOS_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        dispatch({ type: types.LOGIN, payload: result.user });
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT,
  };
};
