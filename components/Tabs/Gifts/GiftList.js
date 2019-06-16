import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Gift from "./Gift";

export default class GiftList extends React.Component{

    static navigationOptions = {
        header: null,
        tabBarVisible: false
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontSize: 37, marginLeft: 30, color: '#FFFFFF', fontFamily: 'montserrat-semi-bold'}}>
                        NAGRADE
                    </Text>
                </View>

                <ScrollView>

                    <Gift coverImg = {require('../../../assets/promoImgs/promo1.jpg')}/>
                    <Gift coverImg = {require('../../../assets/promoImgs/promo2.jpg')}/>
                    <Gift coverImg = {require('../../../assets/promoImgs/promo3.jpg')}/>
                    <Gift coverImg = {require('../../../assets/promoImgs/promo4.jpg')}/>
                    <Gift coverImg = {require('../../../assets/promoImgs/promo6.jpg')}/>

                </ScrollView>

            </View>
        );
    }


    getPromos () {

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#0CA7E7',
        height: 124, width: '100%',
        justifyContent: 'center',
    }
});
