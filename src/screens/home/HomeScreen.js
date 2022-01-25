import React, { useEffect, useState, } from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import MyText from '../../components/text/MyText';
import screenStyles from './styles';
import MyButton from '../../components/button/MyButton';
import { storeString } from '../../storage/AsyncStorageHelper';
import { AsyncStorageKeys, ScreenNames } from '../../config/Constants';

const HomeScreen = (props) => {
    const { navigation } = props;
    const commonStyles = CommonStyles();
    const styles = screenStyles();

    const [campaigns, setCampaigns] = useState([]);

    const loadCampaigns = () => {
        const temp = [];
        for (let i = 1; i < 11; ++i) {
            const campaign = {};
            campaign.id = "CampaignId-" + i;
            campaign.name = "Campaign Name - " + i;
            campaign.data = "This is Campaign Number " + i + " and has some dummy data";
            temp.push(campaign);
        }
        setCampaigns(temp);
    }

    useEffect(() => {
        loadCampaigns();
    }, []);

    const renderCampaign = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate(ScreenNames.CAMPAIGN_SCREEN, {
                    currentCampaign: item,
                });
            }}>
            <View style={styles.campaignContainer}>
                <MyText>
                    {"ID = " + item.id}
                </MyText>
                <MyText>
                    {"Name = " + item.name}
                </MyText>
                <MyText>
                    {"Text = " + item.data}
                </MyText>
            </View>
        </TouchableOpacity>
    )

    const onBookingClicked = () => {

    }

    const onLogout = async () => {
        await storeString(AsyncStorageKeys.IS_USER_LOGGED_IN, 'false');
        navigation.replace(ScreenNames.LOGIN_SCREEN);
    }

    return (
        <SafeAreaView style={[commonStyles.container, commonStyles.alignCenter,]}>
            <MyText style={styles.title}>Home Screen</MyText>

            <FlatList
                data={campaigns}
                renderItem={renderCampaign}
                keyExtractor={(item, index) => index.toString()}
                style={{ width: '100%', flex: 1, }} />

            <MyButton
                containerStyle={styles.button}
                onPress={onBookingClicked}>
                Bookings
            </MyButton>
            <MyButton
                containerStyle={styles.button}
                onPress={onLogout}>
                Logout
            </MyButton>
        </SafeAreaView>
    );
}

export default HomeScreen;