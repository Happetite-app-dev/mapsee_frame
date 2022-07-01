import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button,TextInput, } from 'react-native';
import React, {useState} from 'react';
import { RecordItem } from '../../component/RecordItem';




export default function CollectScreen({naviagtion}){


  const [index, setIndex]=useState(0);
  const [text,setText]=useState("");
  const [records, setRecords]=useState([]);

  const handleTextChange=(value)=>{
    setText(value);
  }

  {/*recordSpecific 함수 만들어야 함-->읽기 전용 화면으로 넘어가기*/}

  const addRecords=()=>{
    if(text != ""){
      const titleText=text;
      setIndex(index+1)
      setText("")
      setRecords((prev)=>{
      return [...prev,{index: index, title:titleText}];
    })}
  }

  const renderItem = (itemData) => (
    <RecordItem  index={itemData.index} title={itemData.item.title}/>
  );



  return(
      <SafeAreaView style={styles.container}>
        <View style={{padding:30}}>
          <TextInput
          placeholder='기록을 추가하세요'
          value={text}
          onChangeText={handleTextChange}/>
          <Button
          title={"+"}
          onPress={addRecords}
          />
        </View>
        <FlatList
              data={records}
              renderItem={renderItem}
              keyExtractor={item => item.title}
        />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});