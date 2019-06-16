import React from 'react';
import {Dimensions, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import QRHandler from "./QRHandler";
import QRScanner from "./QRScanner";
import GiftDetails from "../Gifts/GiftDetails";
import Shaker from "./Shaker"



const width = Dimensions.get('window').width;

import {createStackNavigator, createAppContainer} from 'react-navigation'


const Routes = createStackNavigator ({

    QRScanner: {
        screen: QRScanner
    },

    GiftDetails: {
        screen: GiftDetails
    },

    Shaker: {
        screen: Shaker
    }

})

let Navigation = createAppContainer(Routes);

export default class Scanner extends React.Component{

    render() {
        return (

            <Navigation/>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
    },

    scannerContainer: {
        width: width - 30,
        margin: 15,
        height: 370,
        backgroundColor: '#FFFFFF',
        elevation: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btn: {
        marginTop: 22,
        backgroundColor: '#0CA7E7',
        borderRadius: 8,
        width: 275,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
