import React from 'react';
import {Text, View} from 'react-native';

const Header=(props)=>{
    const {textStyle,ViewStyle}=styles;

    return (
        <View style={ViewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
 
const styles={
    ViewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 1,
        //elevation:2,
        position:'relative',
        //borderBottomColor:'red',
        //error on shadowcolor
        //shadowColor:'#000',
        //shadowOffset:{ width: 0, height: 2 },
        //shadowOpacity:0.2
    },
    textStyle:{
        fontSize:20
    }
};
export { Header };