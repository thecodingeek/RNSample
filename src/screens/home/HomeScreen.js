import * as React from 'react';
import { SafeAreaView, View, Image, } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import MyText from '../../components/text/MyText';
import screenStyles from './styles';

const HomeScreen = (props) => {
    const { navigation } = props;
    const commonStyles = CommonStyles();
    const styles = screenStyles();

    return (
        <SafeAreaView style={commonStyles.container}>
            <MyText>Home Screen</MyText>
            
        </SafeAreaView>
    );
}

export default HomeScreen;