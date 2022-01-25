import React, { useEffect, useState, } from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import MyText from '../../components/text/MyText';
import screenStyles from './styles';
import MyButton from '../../components/button/MyButton';
import MyBackButton from '../../components/back/MyBackButton';
import { storeString, getString, } from '../../storage/AsyncStorageHelper';
import { AsyncStorageKeys, ScreenNames } from '../../config/Constants';

const CampaignScreen = (props) => {
    const { route, navigation } = props;
    const commonStyles = CommonStyles();
    const styles = screenStyles();

    const [currentCampaign, setCurrentCampaign] = useState(null);

    useEffect(() => {
        const { currentCampaign } = route.params;
        setCurrentCampaign(currentCampaign);
    }, []);

    const onBookClicked = async () => {
        const strBookings = await getString(AsyncStorageKeys.BOOKINGS);
        const bookings = [];
        if(strBookings && strBookings.length > 0) {
            bookings.push(...JSON.parse(strBookings));
        }
        bookings.push(currentCampaign);
        await storeString(AsyncStorageKeys.BOOKINGS, JSON.stringify(bookings));
        navigation.goBack();
    }

    return (
        <SafeAreaView style={[commonStyles.container, commonStyles.alignCenter,]}>
            <MyBackButton
                navigation={navigation} />
            <MyText
                style={styles.title}>
                Campaign Details
            </MyText>

            {currentCampaign ?
                <View style={styles.campaignContainer}>
                    <MyText>
                        {"ID = " + currentCampaign.id}
                    </MyText>
                    <MyText>
                        {"Name = " + currentCampaign.name}
                    </MyText>
                    <MyText>
                        {"Text = " + currentCampaign.data}
                    </MyText>
                </View>
                : <View />
            }
            <MyButton
                containerStyle={styles.button}
                onPress={onBookClicked}>
                Book
            </MyButton>
        </SafeAreaView>
    );
}

export default CampaignScreen;