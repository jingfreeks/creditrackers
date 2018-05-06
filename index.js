

//import components
import React from 'react';

import { AppRegistry,Text,View } from 'react-native';
import Header from './src/components/header';
import Lenders from './src/components/Lender';
//create a component
const App=()=>(
    <View style={{flex:1}}>
        <Header headerText='Lenders List'/>
        <Lenders />
    </View>
);


//render the device
AppRegistry.registerComponent('creditracker', () => App);

//import App from './App';

