import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';


const width = Dimensions.get('window').width;


export default class GiftDetails extends React.Component{

    static navigationOptions = {
        title: 'OSVOJILI STE !',
        headerStyle: {
            backgroundColor: '#0CA7E7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>

                <ScrollView>
                    <View style={{ height: 'auto'}}>
                        <Image source={require('../../../assets/promoImgs/promo1.jpg')} style={{width: '100%', height: 220}}/>

                            <Text style={{textAlign: 'center', fontFamily: 'montserrat-bold', fontSize: 25, margin: 5}}>
                                Popust u SportVision
                            </Text>

                            <Text style={{fontSize: 15, fontFamily: 'montserrat', textAlign: 'justify', margin: 10}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis est consequat,
                                aliquam elit vulputate, lacinia est. Integer rhoncus ipsum sit amet iaculis blandit.
                                Integer fringilla condimentum nisl id commodo. Nunc rutrum fermentum velit, a
                                suscipit neque iaculis eu. Integer nec mauris lorem. Etiam sed odio fermentum,
                                interdum augue et, facilisis turpis. Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia Curae; Sed faucibus neque ut condimentum venenatis.
                                Aenean non vulputate diam. Cras eget justo quis turpis dapibus gravida. Vestibulum auctor
                                lobortis imperdiet. Ut viverra massa justo, ut vehicula eros fringilla vel. Integer pulvinar
                                dictum viverra. Donec non metus nulla.
                            </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});
