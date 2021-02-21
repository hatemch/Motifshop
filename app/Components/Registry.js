import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Registry extends React.Component {
  render(){
  return (
    <View style= {styles.registry}>
       <Text style= {styles.header}> Registration</Text>

       <TextInput
          style={styles.textinput}
          placeholder='Enter your username'
          returnKeyType = "next"
          onSubmitEditing = {() => this.passwordInput.focus()}
          secureTextEntry= {true}
          underlineColorAndroid= {"tranparent"}/>
          <TextInput
             style={styles.textinput}
             placeholder='Enter your email'
             returnKeyType = "next"
             onSubmitEditing = {() => this.passwordInput.focus()}
             keyboardType = "email-adress"
             autuCapitalize = "none"
             autoCorrect = {false}
             secureTextEntry= {true}
             underlineColorAndroid= {"tranparent"}/>
          <TextInput
             style={styles.textinput}
             placeholder='Enter your password'
             returnKeyType = "go"
             secureTextEntry
             ref = {(input) => this.passwordInput = input}
             underlineColorAndroid= {"tranparent"}/>
         <TextInput
                style={styles.textinput}
                placeholder='Confirm your password'
                returnKeyType = "go"
                secureTextEntry
                ref = {(input) => this.passwordInput = input}
                underlineColorAndroid= {"tranparent"}/>

        <TouchableOpacity style= {styles.button}>
             <Text style = {styles.btntext}>Sign up </Text>
        </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  registry: {
    alignSelf: 'stretch',
    padding: 20,
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center'
  },
  header: {
    fontSize: 24,
    alignItems: 'center',
    color: '#0000ff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
 textinput: {
   paddingLeft: 20,
   height: 50,
   fontSize: 25,
   borderWidth: 1,
   backgroundColor: 'white',
   marginBottom: 20,
   borderColor: '#1abc9c',
   color: '#34495e'
 },
 button: {
   height: 50,
   //borderRaduis: 50,
   backgroundColor: '#1abc9c',
   paddingVertical: 10,
   justifyContent: 'center',
 },
 btntext: {
   color: '#ecf0f1',
   fontWeight: 'bold',
   textAlign: 'center',
   fontSize: 20,
 }

});
