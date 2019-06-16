import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainComponent from "./components/MainComponent";

export default class Index extends React.Component{

    render() {
        return (
            <MainComponent/>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
