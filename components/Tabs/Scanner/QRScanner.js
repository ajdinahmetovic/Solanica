import React from 'react';
import {Dimensions, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import QRHandler from "./QRHandler";

const width = Dimensions.get('window').width;

export default class QRScanner extends React.Component{
    static navigationOptions = {
        header: null,
        tabBarVisible: false
    };

    constructor(props){
        super(props)

        this.openDetails = this.openDetails.bind(this);
    }

    render() {
        return (

            <View style={styles.container}>


                <View style={styles.scannerContainer}>

                    <Text style={{fontSize: 25, fontFamily: 'montserrat-semi-bold', color: 'black', textAlign: 'center', marginTop: 15, padding: 20}}>
                        SKENIRAJ KOD IZ AMBALAŽE
                    </Text>

                    <ImageBackground source = {require('../../../assets/back.png')} style={{width: 220, height: 220, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: 200, height: 200, backgroundColor: 'black'}}>
                            <QRHandler open={this.openDetails}/>
                        </View>
                    </ImageBackground>

                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Shaker')} style={styles.btn}>

                    <Text style={{fontSize: 25, fontFamily: 'montserrat-semi-bold', color: 'white'}}>
                        POČNI SKENIRANJE
                    </Text>

                </TouchableOpacity>


            </View>

        );
    }

    openDetails () {
        this.props.navigation.navigate('Shaker');
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
