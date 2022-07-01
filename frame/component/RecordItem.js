import React from 'react';
import {View, Text, TouchableHighlight,StyleSheet,useWindowDimensions, Dimensions} from 'react-native';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';

export const RecordItem=(props)=>{
    //prop->record에 들어갈 내용과 인덱스가 주어지면
    //그것을 예쁘게 나타내는 카드
    //터치가 가능한 component->onPress 함수를 실행해야 함->prop으로 받아야 함.
 
    const width=useWindowDimensions().width;
    const height=useWindowDimensions().height;


    let [fontsLoaded] = useFonts({
        Bangers_400Regular,
      });
      
      if (!fontsLoaded) {
        return null;
      }

    return(
        <TouchableHighlight>
            <View style={styles.item}>
                <Text style={styles.title}>
                    {props.index}:{props.title}
                </Text>
            </View>
        </TouchableHighlight>  
    )
}

const styles = StyleSheet.create({
    item: {
        height:50,
        backgroundColor: '#85C1E9',
        padding: 13,
        marginVertical: 8,
        marginHorizontal: 30,
        fontFamily:'Bangers_400Regular',
        elevation:3,//안드로이드에서만 사용가능
        shadowRadius:2,//IOs에서만 사용가능
    },
    title: {
      fontSize: 16,
      fontFamily:'Bangers_400Regular',
    },
  });