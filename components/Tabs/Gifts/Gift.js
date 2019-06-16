import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;


export default class Gift extends React.Component{

    render() {
        return (
            <View style={styles.container}>

                <Image style={{width: '100%', height: 180, borderRadius: 10}} source={this.props.coverImg}/>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {

        elevation: 10,
        width: width - 30,
        height: 180,
        margin: 15,
        borderRadius: 10

    },
});
