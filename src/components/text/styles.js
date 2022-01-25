import { StyleSheet, useColorScheme, } from 'react-native';
import Dimensions from '../../config/Dimensions';
import Colors from '../../styles/Colors';

const styles = () => {
    const colorScheme = useColorScheme();
    return StyleSheet.create({
        textStyle: {
            color: Colors[colorScheme].textColor,
            fontSize: Dimensions.normalFontSize,
        },
    })
};

export default styles;
