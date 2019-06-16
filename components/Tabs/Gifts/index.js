import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Gift from "./Gift";
import {createAppContainer, createStackNavigator} from "react-navigation";
import GiftList from "./GiftList"
import GiftDetails from "./GiftDetails"



const Routes = createStackNavigator ({

    GiftList: {
        screen: GiftList
    },

    GiftDetails: {
        screen: GiftDetails
    }

})

let Navigation = createAppContainer(Routes);

export default class Gifts extends React.Component{

    render() {
        return (
          <Navigation/>
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
