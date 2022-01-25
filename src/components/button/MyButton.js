import React from 'react';
import { TouchableOpacity, } from 'react-native';
import componentStyles from './styles';
import MyText from '../text/MyText';

const MyButton = (props) => {
    const styles = componentStyles();
    return (
        <TouchableOpacity
            style={[props.isReverse ? styles.reverseContainer : styles.container, props.containerStyle]}
            onPress={() => {
                if(props.onPress) {
                    props.onPress();
                }
            }}>
            <MyText
                {...props}
                style={[props.isReverse ? styles.reverseText : styles.text, props.style,]}>
                {props.children}
            </MyText>
        </TouchableOpacity>
    );
}

export default MyButton;
