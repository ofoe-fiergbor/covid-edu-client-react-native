import firebase from "../../firebase/config";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import keys from "../../firebase/keys";
import types from "../types";

export const loginWithGoogle = () => {
  return async (dispatch) => {
    try {
      const result = await Google.logInAsync({
        androidClientId: keys.ANDROID_CLIENT_ID,
        iosClientId: keys.IOS_CLIENT_ID,
        scopes: ["profile", "email"],
      });
      if (result.type === "success") {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );
        firebase
          .auth()
          .signInWithCredential(credential)
          .catch((err) => console.log("Firebase Error: ", err));

        dispatch({ type: types.LOGIN, payload: result.user });
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
};

export const loginWithFacebook = () => {
  console.log('Facebook login')
  // return async (dispatchEvent) => {
  //   try {
  //     await Facebook.initializeAsync({ appId: keys.FACEBOOK_APP_ID });
  //     const result = await Facebook.logInWithReadPermissionsAsync({
  //       permissions: ["public_profile"],
  //     });
  //     console.log("RESULT >>>>>>>>>>>>>>>>", result);
  //     if (result.type === "success") {
  //       // Get the user's name using Facebook's Graph API
  //       const response = await fetch(
  //         `https://graph.facebook.com/me?access_token=${result.token}`
  //       );
  //       console.log("RESPONSE >>>>>>>>>>>>>>>>", response);

  //       let information = await response.json();

  //       console.log("INFORMATION >>>>>>>>>>>>>>>>", information);
  //     }
  //   } catch (error) {}
  // };
};

export const logout = () => {
  return (dispatchEvent) => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("Signed out successfully"))
      .catch((err) => console.log("Sign out err", err));
    dispatchEvent({ type: types.LOGOUT });
  };
};
