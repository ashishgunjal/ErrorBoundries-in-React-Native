import React, {Component} from 'react';
import {Text, View} from 'react-native';
import CounterApp from '../Components/CounterApp';
import ErrorBoundries from '../Components/ErrorBoundries';

export default class AppContainer extends Component {
  render() {
    return (
      <>
        <Text style={{alignSelf: 'center', marginTop: 20}}>Counter App</Text>
        <ErrorBoundries>
             <CounterApp />
        </ErrorBoundries>
       
      </>
    );
  }
}
