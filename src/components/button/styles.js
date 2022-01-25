import { StyleSheet, useColorScheme, } from 'react-native';
import Dimensions from '../../config/Dimensions';
import Colors from '../../styles/Colors';

const styles = () => {
    const colorScheme = useColorScheme();
    return StyleSheet.create({
        container: {
            width: '100%',
            borderWidth: 1,
            borderColor: Colors[colorScheme].foregroundColor,
            borderRadius: Dimensions.normalBorderRadius,
            backgroundColor: Colors[colorScheme].foregroundColor,
            alignItems: 'center'
        },
        text: {
            paddingVertical: Dimensions.normalMargin,
            color: Colors.staticColors.white,
            fontSize: Dimensions.largeFontSize,
        },
        reverseContainer: {
            width: '100%',
            borderWidth: 1,
            borderColor: Colors[colorScheme].foregroundColor,
            borderRadius: Dimensions.normalBorderRadius,
            backgroundColor: Colors[colorScheme].backgroundColor,
            alignItems: 'center'
        },
        reverseText: {
            paddingVertical: Dimensions.normalMargin,
            color: Colors[colorScheme].foregroundColor,
            fontSize: Dimensions.largeFontSize,
        },
    })
};

export default styles;
