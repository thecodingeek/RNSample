import React from 'react';
import { Text, } from 'react-native';
import componentStyles from './styles';

const MyText = (props) => {
    const styles = componentStyles();
    return (
        <Text
            {...props}
            style={[styles.textStyle, props.style,]}>
            {props.children}
        </Text>
    );
}

export default MyText;
