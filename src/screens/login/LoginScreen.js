import React, { useState, } from 'react';
import { SafeAreaView, KeyboardAvoidingView, ScrollView, Image, TouchableOpacity, } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import { ScreenNames, } from '../../config/Constants';
import MyText from '../../components/text/MyText';
import MyTextInput from '../../components/textInput/MyTextInput';
import MyButton from '../../components/button/MyButton';
import screenStyles from './styles';
import { isEmailValid, showAlertDialog } from '../../helpers/HelperFunctions';

const LoginScreen = (props) => {
    const { navigation } = props;
    const commonStyles = CommonStyles();
    const styles = screenStyles();

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
    }

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
                            if (isLoading) {
                                return;
                            }
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