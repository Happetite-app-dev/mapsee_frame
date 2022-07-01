import * as React from 'react';
import {View,Text} from 'react-native';

export default function MyPageScreen({naviagtion}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text
                onPress={()=>naviagtion.navigate('Map')}
                style={{fontSize:26, fontWeight:'bold'}}>My Page Screen</Text>
        </View>
    )
}