import { StyleSheet, useColorScheme, } from 'react-native';
import Dimensions from '../../config/Dimensions';
import Colors from '../../styles/Colors';

const styles = () => {
    const colorScheme = useColorScheme();
    return StyleSheet.create({
        container: {
            width: '100%',
        },
        headerContainer: {
            alignItems: 'center',
        },
        labelText: {
            color: Colors[colorScheme].textColor,
            fontSize: Dimensions.xLargeFontSize,
        },
        subLabelText: {
            color: Colors[colorScheme].darkTextColor,
            fontSize: Dimensions.normalFontSize,
            marginStart: Dimensions.xSmallMargin,
        },
        textInputStyle: {
            color: Colors[colorScheme].textColor,
            fontSize: Dimensions.normalFontSize,
            borderBottomColor: Colors[colorScheme].textColor,
            borderBottomWidth: 1,
            paddingVertical: Dimensions.normalMargin,
        },
    })
};

export default styles;
