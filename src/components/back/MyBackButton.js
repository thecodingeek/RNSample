import React from 'react';
import { TouchableOpacity, Image, } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import componentStyles from './styles';

const MyBackButton = (props) => {
    const commonStyles = CommonStyles();
    const styles = componentStyles();
    return (
        <TouchableOpacity
            style={[styles.container, commonStyles.centerInParent, props.containerStyle]}
            onPress={() => {
                if (props.onPress) {
                    props.onPress();
                } else if (props.navigation) {
                    props.navigation.goBack();
                } else {
                    // Do nothing
                }
            }}>
            <Image
                source={require('../../assets/images/back-arrow.png')}
                style={[styles.backArrow, props.styles]} />
        </TouchableOpacity>
    );
}

export default MyBackButton;
