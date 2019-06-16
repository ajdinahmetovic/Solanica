import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainComponent from "./components/MainComponent";
import * as Font from 'expo-font'

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      isReady: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'montserrat': require('./assets/font/Montserrat-Regular.ttf'),
      'montserrat-bold': require('./assets/font/Montserrat-Bold.ttf'),
      'montserrat-thin': require('./assets/font/Montserrat-Thin.ttf'),
      'montserrat-semi-bold': require('./assets/font/Montserrat-SemiBold.ttf'),

    });

    this.setState({isReady:true})
  }


  render() {
    if (!this.state.isReady) {
      return <View/>;
    }
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
