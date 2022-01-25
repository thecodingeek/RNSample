import AsyncStorage from '@react-native-async-storage/async-storage';

const storeString = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
    }
}

const getString = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            // value previously stored
            return value;
        }
        return null;
    } catch (e) {
        // error reading value
        return null;
    }
}

export { storeString, getString, };