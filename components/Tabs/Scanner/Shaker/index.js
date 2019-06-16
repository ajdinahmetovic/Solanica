import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, AnimatedImage, Animated, Easing } from 'react-native';

import { DeviceMotion } from 'expo-sensors';


const width = Dimensions.get('window').width;


export default class Shaker extends React.Component{
    static navigationOptions = {
        header: null,
        tabBarVisible: false
    };


    constructor (props) {
        super(props)
        this.state = {
            motionData: []
        }
        this.animatedValue = new Animated.Value(0)
    }

    handleAnimation = () => {
        // A loop is needed for continuous animation
        Animated.loop(
            // Animation consists of a sequence of steps
            Animated.sequence([
                // start rotation in one direction (only half the time is needed)
                Animated.timing(this.animatedValue, {toValue: 1.0, duration: 150, easing: Easing.linear, useNativeDriver: true}),
                // rotate in other direction, to minimum value (= twice the duration of above)
                Animated.timing(this.animatedValue, {toValue: -1.0, duration: 300, easing: Easing.linear, useNativeDriver: true}),
                // return to begin position
                Animated.timing(this.animatedValue, {toValue: 0.0, duration: 150, easing: Easing.linear, useNativeDriver: true})
            ]),
            {
                iterations: 4
            }
        ).start(() => {
            this.props.navigation.navigate('GiftDetails')
        });
    }



    componentDidMount() {
        this.toggleSubscription()
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    toggleSubscription = () => {
        if (this.subscription) {
            this.unsubscribe();
        } else {
            this.subscribe();
        }
    }

    subscribe = () => {
        // DeviceMotion.setUpdateInterval(1000)
        this.subscription = DeviceMotion.addListener(motionData => {



            if(motionData.rotation.beta < -1){
                //console.log('Upside down');
                this.handleAnimation()
                this.unsubscribe();
            }

        });
    }

    unsubscribe = () => {
        this.subscription && this.subscription.remove();
        this.subscription = null;
    }


    render() {
        return (
            <View style={styles.container}>

                <Animated.Image
                    source={require('../../../../assets/solanica.png')}
                    resizeMode='contain'
                    style={{

                        width: 278,
                        height: 560,
                        transform: [{
                            rotate: this.animatedValue.interpolate({
                                inputRange: [-1, 1],
                                outputRange: ['-0.1rad', '0.1rad']
                            })
                        }]
                    }}
                />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
