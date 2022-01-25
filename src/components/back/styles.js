import { StyleSheet, useColorScheme, } from 'react-native';
import Dimensions from '../../config/Dimensions';
import Colors from '../../styles/Colors';

const styles = () => {
    const colorScheme = useColorScheme();
    return StyleSheet.create({
        container: {
            width: Dimensions.backArrowWidth + Dimensions.xxLargeMargin,
            height: Dimensions.backArrowHeight + Dimensions.xxLargeMargin,
            alignSelf: 'flex-start',
        },
        backArrow: {
            width: Dimensions.backArrowWidth,
            height: Dimensions.backArrowHeight,
            tintColor: Colors[colorScheme].foregroundColor,
        },
    })
};

export default styles;
