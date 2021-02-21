import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import Registry from './Registry';
import HomePage from './HomePage';

//import Navigation from './Navigation/Navigation'



export default class SignIn extends React.Component {
  render(){
  return (
    <View style= {styles.signin}>
       <Text style= {styles.header}> Sign In</Text>


       <TextInput
          style={styles.textinput}
          placeholder='Email'
          returnKeyType = "next"
          onSubmitEditing = {() => this.passwordInput.focus()}
          keyboardType = "email-adress"
          autuCapitalize = "none"
          autoCorrect = {false}
          secureTextEntry= {true}
          underlineColorAndroid= {"tranparent"}/>
       <TextInput
          style={styles.textinput}
          placeholder='Password'
          returnKeyType = "go"
          secureTextEntry
          ref = {(textinput) => this.passwordInput = textinput}
          underlineColorAndroid= {"tranparent"}/>

        <TouchableOpacity style= {styles.button}
             onPress = {() => this.props.navigation.navigate('HomePage')}>
             <Text style = {styles.btntext}>Sign in </Text>
        </TouchableOpacity>

        <Button
             title = "register Here"
             color = "#1abc9c"
             onPress = {() => this.props.navigation.navigate('Registry')} />

    </View>
  );
}
}

/*export default class App extends Component {
  render(){
    return (
      <AppStackNavigator/>
    );
  }
}
const AppStackNavigator = createStackNavigator({
  Login : SingnIn,
  Register : Registry,
  Home : HomePage
});*/


const styles = StyleSheet.create({
  signin: {
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
   color: '#34495e',
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
