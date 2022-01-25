import { StyleSheet, useColorScheme, } from 'react-native';
import Dimensions from '../../config/Dimensions';
import Colors from '../../styles/Colors';

const styles = () => {
    const colorScheme = useColorScheme();
    return StyleSheet.create({
        container: {
            alignItems: 'center',
        },
        logoImage: {
            width: Dimensions.logoImageWidth,
            height: Dimensions.logoImageHeight,
        },
        scrollViewContainer: {
            flex: 1,
            width: '100%',
        },
        scrollViewContent: {
            alignItems: 'center',
            marginHorizontal: Dimensions.xLargeMargin,
        },
        title: {
            fontSize: Dimensions.titleFontSize,
            marginTop: Dimensions.xLargeMargin,
        },
        textInput: {
            marginTop: Dimensions.xLargeMargin,
        },
        forgotPasswordContainer: {
            alignSelf: 'flex-end',
            marginTop: Dimensions.smallMargin,
            paddingVertical: Dimensions.smallMargin,
        },
        forgotPassword: {
            color: Colors[colorScheme].darkTextColor,
            fontSize: Dimensions.largeFontSize,
        },
        button: {
            marginTop: Dimensions.normalMargin,
            width: '70%',
        },
        signUpContainer: {
            marginBottom: Dimensions.xxLargeMargin,
        },
        signUp: {
            fontSize: Dimensions.xLargeFontSize,
            marginTop: Dimensions.xLargeMargin,
            color: Colors[colorScheme].foregroundColor,
        },
        activityIndicator: {
            marginTop: Dimensions.xLargeMargin,
        },
    })
};

export default styles;