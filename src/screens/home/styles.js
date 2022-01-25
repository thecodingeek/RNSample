import { StyleSheet, useColorScheme, } from 'react-native';
import Dimensions from '../../config/Dimensions';
import Colors from '../../styles/Colors';

const styles = () => {
    const colorScheme = useColorScheme();
    return StyleSheet.create({
        title: {
            fontSize: Dimensions.headerFontSize,
            color: Colors[colorScheme].reverseTextColor,
            textAlign: 'center',
        },
        button: {
            width: '70%',
            marginTop: Dimensions.xLargeMargin,
            marginBottom: Dimensions.xxLargeMargin,
        },
    });
}

export default styles;