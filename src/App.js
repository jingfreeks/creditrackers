

//import components
import React,{Component} from 'react';

import { AppRegistry,Text,View } from 'react-native';
import {Header} from './components/common';
import Lenders  from './components/Lender';
class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <Header headerText='Lenders List'/>
        <Lenders />
      </View>
    );
  };
}

//render the device
//AppRegistry.registerComponent('creditracker', () => App);
export default App; 
//import App from './App';

