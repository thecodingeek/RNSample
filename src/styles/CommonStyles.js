import { StyleSheet, useColorScheme, } from "react-native";
import Dimensions from "../config/Dimensions";
import Colors from "../styles/Colors";

const CommonStyles = () => {
    const colorScheme = useColorScheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors[colorScheme].backgroundColor,
        },
        centerInParent: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        justifyCenter: {
            justifyContent: 'center',
        },
        alignCenter: {
            alignItems: 'center',
        },
        rowContainer: {
            flexDirection: 'row',
        },
        fullWidth: {
            width: '100%',
        },
        errorText: {
            alignSelf: 'flex-end',
            color: Colors.staticColors.red,
            marginTop: Dimensions.smallMargin,
        },
    })
}

export default CommonStyles;