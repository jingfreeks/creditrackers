import React, {Component} from 'react';
import {
    View,
    Text, 
    Image,
    TouchableOpacity
} from 'react-native';

import Card from './card';
import CardSection from './cardsection';
import Button from './button';

const LenderDetail =({lender})=>{
    const {Name,Address}=lender;
    const {
        imageContainerStyle,
        imageStyle,
        headerContentStyle,
        headerTextStyle,
        thumbnailContainerStyle
    }=styles;
    
    return(
        <Card>
            <CardSection>
                <View style={imageContainerStyle}>
                    <Image
                        style={thumbnailContainerStyle} 
                        source={require('../../image/gon.jpg')}                       
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{Name}</Text>
                    <Text>{Address}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} 
                    source={require('../../image/hxh.jpg')}
                />
            </CardSection>
            <CardSection>
                <Button onPress={()=>console.log(Name)}/>
            </CardSection>
        </Card>
        
    )
};

const styles={
    
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
        fontSize:18
    },
    imageStyle:{
        width:null,
        height:300,
        flex:1
    },
    thumbnailContainerStyle:{
        width:50,
        height:50
    },
    imageContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    }
};


export default LenderDetail; 