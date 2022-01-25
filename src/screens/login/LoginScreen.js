import React, { useEffect, useState, } from 'react';
import { SafeAreaView, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import { AsyncStorageKeys, ScreenNames, } from '../../config/Constants';
import MyText from '../../components/text/MyText';
import MyTextInput from '../../components/textInput/MyTextInput';
import MyButton from '../../components/button/MyButton';
import screenStyles from './styles';
import { isEmailValid, showAlertDialog } from '../../helpers/HelperFunctions';
import { getString, storeString, } from '../../storage/AsyncStorageHelper';

const LoginScreen = (props) => {
    const { navigation } = props;
    const commonStyles = CommonStyles();
    const styles = screenStyles();

    const [availableUser, setAvailableUser] = useState({});
    const [user, setUser] = useState({});
    const [errors, setErrors] = useState({});

    const onChangeInputText = (fieldName, value) => {
        const tempUser = user;
        tempUser[fieldName] = value;
        setUser(user);

        let tempErrors = { ...errors };
        tempErrors[fieldName] = "";
        setErrors(tempErrors);
    }

    const onLoginClick = async () => {
        let isError = false;
        let tempErrors = { ...errors };
        if (!user.email || user.email === "") {
            tempErrors.email = "Enter Email";
            isError = true;
        } else if (!isEmailValid(user.email)) {
            tempErrors.email = "Enter valid Email";
            isError = true;
        } else {
            tempErrors.email = "";
        }

        if (!user.password || user.password === "") {
            tempErrors.password = "Enter Password";
            isError = true;
        } else {
            tempErrors.password = "";
        }

        setErrors(tempErrors);

        if (isError) {
            return;
        }

        if(availableUser.email) {
            if(availableUser.email === user.email && availableUser.password === user.password) {
                await storeString(AsyncStorageKeys.IS_USER_LOGGED_IN, 'true');
                navigation.replace(ScreenNames.HOME_SCREEN);
            } else {
                showAlertDialog('', 'Invalid Credentials');    
            }
        } else {
            showAlertDialog('', 'Please Sign Up');
        }
    }

    useEffect(() => {
        const getUser = async () => {
            const strUser = await getString(AsyncStorageKeys.USER);
            const isUserLoggedIn = await getString(AsyncStorageKeys.IS_USER_LOGGED_IN);

            if(strUser && strUser.length > 0) {
                setAvailableUser(JSON.parse(strUser));
            }
            if(isUserLoggedIn && isUserLoggedIn === 'true') {
                navigation.replace(ScreenNames.HOME_SCREEN);
            }
        }

        getUser();
    }, []);

    return (
        <SafeAreaView style={[commonStyles.container, styles.container]}>
            <KeyboardAvoidingView
                behavior={'padding'}
                style={styles.scrollViewContainer}>
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    keyboardShouldPersistTaps='always'>
                    <MyText style={styles.title}>
                        Login
                    </MyText>

                    <MyTextInput
                        label={"Email"}
                        placeholder={"Enter Email here"}
                        containerStyle={styles.textInput}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        onChangeText={text => onChangeInputText("email", text)}
                        error={errors.email}
                        maxLength={50} />

                    <MyTextInput
                        label={"Password"}
                        placeholder={"Enter Password here"}
                        containerStyle={styles.textInput}
                        secureTextEntry={true}
                        onChangeText={text => onChangeInputText("password", text)}
                        error={errors.password}
                        maxLength={20} />

                    <TouchableOpacity
                        style={styles.forgotPasswordContainer}
                        onPress={() => {
                            // Do nothing
                            showAlertDialog('', 'Nothing for now');
                        }}>
                        <MyText style={styles.forgotPassword}>
                            Forgot Password?
                        </MyText>
                    </TouchableOpacity>

                    <MyButton
                        containerStyle={styles.button}
                        onPress={onLoginClick}>
                        Login
                    </MyButton>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(ScreenNames.SIGN_UP_SCREEN);
                        }}
                        style={styles.signUpContainer}>
                        <MyText
                            style={styles.signUp}>
                            Sign Up
                        </MyText>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default LoginScreen;