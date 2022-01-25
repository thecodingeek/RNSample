import React, { useEffect, useState, } from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, } from 'react-native';
import CommonStyles from '../../styles/CommonStyles';
import MyText from '../../components/text/MyText';
import screenStyles from './styles';
import MyButton from '../../components/button/MyButton';
import MyBackButton from '../../components/back/MyBackButton';
import { storeString, getString, } from '../../storage/AsyncStorageHelper';
import { AsyncStorageKeys, ScreenNames } from '../../config/Constants';

const BookingsScreen = (props) => {
    const { navigation } = props;
    const commonStyles = CommonStyles();
    const styles = screenStyles();

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const getBookings = async () => {
            const strBookings = await getString(AsyncStorageKeys.BOOKINGS);
            if (strBookings && strBookings.length > 0) {
                const bookings = JSON.parse(strBookings);
                setBookings(bookings);
            }
        }

        getBookings();
    }, []);

    const renderCampaign = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => {
                // Do nothing
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

    return (
        <SafeAreaView style={[commonStyles.container, commonStyles.alignCenter,]}>
            <MyBackButton
                navigation={navigation} />
            <MyText
                style={styles.title}>
                Bookings
            </MyText>

            {(bookings && bookings.length > 0) ?
                <FlatList
                    data={bookings}
                    renderItem={renderCampaign}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ width: '100%', flex: 1, }} />
                :
                <View style={[commonStyles.container, commonStyles.centerInParent]}>
                    <MyText style={styles.title}>
                        No Bookings yet
                    </MyText>
                </View>
            }
        </SafeAreaView>
    );
}

export default BookingsScreen;