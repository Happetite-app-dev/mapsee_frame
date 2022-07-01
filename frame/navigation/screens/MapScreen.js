import * as React from 'react';
import {View,Text,Image} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function MapScreen({naviagtion}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Image 
            source={require('../../assets/map_img.png')}
            style={{width:windowWidth, height:windowHeight}}
            resizeMode="repeat"
            />
        </View>
    )
}