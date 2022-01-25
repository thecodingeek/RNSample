import React from 'react';
import { View, TextInput, } from 'react-native';
import MyText from '../text/MyText';
import componentStyles from './styles';
import CommonStyles from '../../styles/CommonStyles';

const MyTextInput = (props) => {
    const styles = componentStyles();
    const commonStyles = CommonStyles();
    return (
        <View style={[styles.container, props.containerStyle]}>
            <View style={[commonStyles.rowContainer, styles.headerContainer, props.headerStyle]}>
                {(props.label && props.label.length > 0) ?
                    <MyText style={[styles.labelText, props.labelStyle]}>
                        {props.label}
                    </MyText>
                    : <View />
                }
                {(props.subLabel && props.subLabel.length > 0) ?
                    <MyText style={[styles.subLabelText, props.subLabelStyle]}>
                        {props.subLabel}
                    </MyText>
                    : <View />
                }
            </View>
            <TextInput
                {...props}
                style={[styles.textInputStyle, props.style,]}
            />
            {(props.error && props.error.length > 0) ?
                <MyText style={[commonStyles.errorText, props.errorStyle]}>
                    {props.error}
                </MyText>
                : <View />
            }
        </View>
    );
}

export default MyTextInput;
