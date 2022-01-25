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
            width: Dimensions.smallLogoImageWidth,
            height: Dimensions.smallLogoImageHeight,
            marginTop: -20,
        },
        scrollViewContainer: {
            flex: 1,
            width: '100%',
        },
        scrollViewContent: {
            flexGrow: 1,
            alignItems: 'center',
            marginHorizontal: Dimensions.largeMargin,
        },
        title: {
            fontSize: Dimensions.titleFontSize,
            marginTop: Dimensions.xLargeMargin,
            marginHorizontal: Dimensions.xxLargeMargin,
            textAlign: 'center',
        },
        textInput: {
            marginTop: Dimensions.xLargeMargin,
        },
        button: {
            width: '70%',
            marginTop: Dimensions.xLargeMargin,
            marginBottom: Dimensions.xxLargeMargin,
        },
        labelText: {
            color: Colors[colorScheme].textColor,
            fontSize: Dimensions.xLargeFontSize,
        },
        radioContainer: {
            marginTop: Dimensions.normalMargin,
        },
        radioButton: {
            marginEnd: Dimensions.xxxLargeMargin,
        },
        maritalRadio: {
            justifyContent: 'space-between',
        },
        radioHeaderContainer: {
            alignItems: 'center',
        },
        subLabelText: {
            color: Colors[colorScheme].darkTextColor,
            fontSize: Dimensions.normalFontSize,
            marginStart: Dimensions.xSmallMargin,
        },
        imageContainer: {
            height: Dimensions.signUpImageHeight + 20,
            marginHorizontal: 5,
        },
        image: {
            width: Dimensions.signUpImageWidth,
            height: Dimensions.signUpImageHeight,
            backgroundColor: Colors.staticColors.lightGrey,
        },
        dummyImage: {
            width: Dimensions.signUpImageWidth,
            height: Dimensions.signUpImageHeight,
            backgroundColor: Colors.staticColors.lightGrey,
            tintColor: Colors.staticColors.darkGrey,
        },
        deleteImageContainer: {
            position: 'absolute',
            top: 2,
            end: 20,
            padding: 5,
            borderRadius: 15,
            backgroundColor: Colors[colorScheme].foregroundColor,
        },
        deleteImage: {
            width: 15,
            height: 15,
            tintColor: Colors.staticColors.white,
        },
        activityIndicator: {
            marginTop: Dimensions.xLargeMargin,
        },
    })
};

export default styles;