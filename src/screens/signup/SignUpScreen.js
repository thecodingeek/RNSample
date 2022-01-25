import React, { useState, } from 'react';
import { SafeAreaView, View, KeyboardAvoidingView, ScrollView, Image, Button, TouchableOpacity, } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import { ScreenNames, } from '../../config/Constants';
import MyText from '../../components/text/MyText';
import MyTextInput from '../../components/textInput/MyTextInput';
import MyButton from '../../components/button/MyButton';
import MyBackButton from '../../components/back/MyBackButton';
import screenStyles from './styles';
import { isEmailValid } from '../../helpers/HelperFunctions';

const SignUpScreen = (props) => {
    const { navigation } = props;
    const commonStyles = CommonStyles();
    const styles = screenStyles();

    const [user, setUser] = useState({});
    const [errors, setErrors] = useState({});

    const onChangeInputText = (fieldName, value) => {
        const tempUser = user;
        tempUser[fieldName] = value;
        setUser(user);

        let tempErrors = {...errors};
        tempErrors[fieldName] = "";
        setErrors(tempErrors);
    }

    const onFurtherClick = () => {
        let isError = false;
        let tempErrors = {...errors};

        if(!user.firstName || user.firstName === "") {
            tempErrors.firstName = "Enter First Name";
            isError = true;
        } else {
            tempErrors.firstName = "";
        }

        if(!user.lastName || user.lastName === "") {
            tempErrors.lastName = "Enter Last Name";
            isError = true;
        } else {
            tempErrors.lastName = "";
        }

        if(!user.email || user.email === "") {
            tempErrors.email = "Enter Email";
            isError = true;
        } else if (!isEmailValid(user.email)) {
            tempErrors.email = "Enter valid email";
            isError = true;
        } else {
            tempErrors.email = "";
        }

        if(!user.password || user.password === "") {
            tempErrors.password = "Enter Password";
            isError = true;
        } else if (user.password.length < 6) {
            tempErrors.password = "Password should be 6 characters long";
            isError = true;
        } else {
            tempErrors.password = "";
        }

        setErrors(tempErrors);

        if(isError) {
            return;
        }
    }

    return (
        <SafeAreaView style={[commonStyles.container, styles.container]}>

            <MyBackButton
                navigation={navigation} />

            <KeyboardAvoidingView
                behavior={'padding'}
                style={styles.scrollViewContainer}>

                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    keyboardShouldPersistTaps='always'>
                    <MyText style={styles.title}>
                        Sign Up
                    </MyText>

                    <MyTextInput
                        label={"First Name"}
                        placeholder={"Enter First Name"}
                        containerStyle={styles.textInput}
                        onChangeText={text => onChangeInputText("firstName", text)}
                        error={errors.firstName}
                        maxLength={20} />

                    <MyTextInput
                        label={"Last Name"}
                        placeholder={"Enter Last Name"}
                        containerStyle={styles.textInput}
                        onChangeText={text => onChangeInputText("lastName", text)}
                        error={errors.lastName}
                        maxLength={20} />

                    <MyTextInput
                        label={"Email"}
                        placeholder={"Enter Email"}
                        containerStyle={styles.textInput}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        onChangeText={text => onChangeInputText("email", text)}
                        error={errors.email}
                        maxLength={50} />

                    <MyTextInput
                        label={"Password"}
                        placeholder={"Enter Password"}
                        containerStyle={styles.textInput}
                        secureTextEntry={true}
                        onChangeText={text => onChangeInputText("password", text)}
                        error={errors.password}
                        maxLength={20} />

                    <MyButton
                        containerStyle={styles.button}
                        onPress={onFurtherClick}>
                        Further
                    </MyButton>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default SignUpScreen;