import React, {Component} from 'react';
import {View, Text,ScrollView} from 'react-native';
import LenderDetail from './lendersList';
//import axios from 'axios';

class Lenders extends Component{

    state={lenders:[]};
    componentWillMount(){

        return fetch('http://192.168.1.46:8080/validation/jsondata.json')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            lenders: responseJson.payrollperiod,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
        
    }   

    renderLenderProfile(){
        return this.state.lenders.map(
            lender=><LenderDetail key={lender.Name} lender={lender} />
        );
    }
    render(){
        console.log(this.state);
        return(
            <ScrollView>
                {this.renderLenderProfile()}
            </ScrollView>
        );
    }
}

export default Lenders;

