import { StyleSheet, useColorScheme, } from 'react-native';
import Dimensions from '../../config/Dimensions';
import Colors from '../../styles/Colors';

const styles = () => {
    const colorScheme = useColorScheme();
    return StyleSheet.create({
        title: {
            fontSize: Dimensions.titleFontSize,
            color: Colors[colorScheme].foregroundColor,
            textAlign: 'center',
        },
        button: {
            width: '70%',
            marginTop: Dimensions.normalMargin,
        },
        campaignContainer: {
            marginHorizontal: Dimensions.xLargeMargin,
            marginVertical: Dimensions.smallMargin,
            borderWidth: 1,
            borderColor: Colors.staticColors.black,
            padding: Dimensions.normalMargin,
        },
    });
}

export default styles;