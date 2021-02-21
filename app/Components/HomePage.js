import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class HomePage extends React.Component {
  render() {
    return (

      <View style = {styles.container}>
           <Text style = {styles.text}> Welcome to Home page </Text>
      </View>
    );

  }
}
const styles ={
  container: {
    alignSelf: 'stretch',
    padding: 20,
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  text : {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  }
}
