import * as React from 'react';
import { SafeAreaView, View, Image, } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import MyText from '../../components/text/MyText';
import screenStyles from './styles';
import MyButton from '../../components/button/MyButton';
import { storeString } from '../../storage/AsyncStorageHelper';
import { AsyncStorageKeys, ScreenNames } from '../../config/Constants';

const HomeScreen = (props) => {
    const { navigation } = props;
    const commonStyles = CommonStyles();
    const styles = screenStyles();

    const onLogout = async () => {
        await storeString(AsyncStorageKeys.IS_USER_LOGGED_IN, 'false');
        navigation.replace(ScreenNames.LOGIN_SCREEN);
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <MyText>Home Screen</MyText>
            <MyButton
                containerStyle={styles.button}
                onPress={onLogout}>
                Logout
            </MyButton>
        </SafeAreaView>
    );
}

export default HomeScreen;