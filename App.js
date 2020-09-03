import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [clear1, inp1] = useState(null);
  const [clear2, inp2] = useState(null);
  return (
    <View style={styles.container}>
      <TextInput style = {styles.textinp} placeholder = "Enter Username" onChangeText = {txt => inp1(txt)}>{clear1}</TextInput>
  <TextInput style = {styles.textinp} placeholder = "Enter Password" onChangeText = {txt => inp2(txt)}>{clear2}</TextInput>
      <Button title = "Login"
        onPress = {() =>{
        // counter++;
        inp1("");
        inp2("");
        }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinp: {
    height: 60, 
    width: 300, 
    borderColor: "#00FFFF", 
    borderWidth: 1,
    padding :20,
    margin: 20,
    borderRadius: 30 ,
    borderWidth: 1,

  }
});
