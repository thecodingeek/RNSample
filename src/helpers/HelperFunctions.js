import { Alert } from "react-native";

export const isEmailValid = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email)) {
        return true;
    }
    return false;
}

export const showAlertDialog = (title, message, okButtonText, okButtonCallback, cancelButtonText) => {
    Alert.alert(
        title,
        message,
        [
          {
            text: okButtonText ? okButtonText : 'Okay',
            onPress: () => {
                if(okButtonCallback) {
                    okButtonCallback();
                }
            },
          },
          {
            text: cancelButtonText ? cancelButtonText: "",
          },
        ],
        { cancelable: true },
      );
}