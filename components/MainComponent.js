import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Gifts from "./Tabs/Gifts";
import Scanner from "./Tabs/Scanner";
import Profile from "./Tabs/Profile";
import Shaker from "./Tabs/Scanner/Shaker";


const TabNavigator = createBottomTabNavigator ({

    Gifts: {
        screen: Gifts,
        navigationOptions: {
            tabBarLabel: '',
            tabBarIcon: ({tintColor}) => (
                <Image  source={require('../assets/navIcons/gift.png')} style={{width: 32, height: 30}} />
            )
        }
    },

    Scanner: {
        screen: Scanner,
        navigationOptions: {
            tabBarLabel: '',
            tabBarIcon: ({tintColor}) => (
                    <Image  source={require('../assets/navIcons/scanner.png')} style={{width: 90, height: 150}} />
            )
        }
    },

    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: '',
            tabBarIcon: ({tintColor}) => (
                    <Image  source={require('../assets/navIcons/profile.png')} style={{width: 31, height: 30, marginBottom: 10}} />
                    )
        }
    },

},

{
    tabBarOptions: {
        showLabel: false,
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            style:{
            backgroundColor: '#0CA7E7',
                height: 65,
        },
    },
}

);

let BottomTabNavigation = createAppContainer(TabNavigator);

export default class MainComponent extends React.Component {

    constructor (props ){
        super(props);
    }

    render() {
        return (
            <BottomTabNavigation/>
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
