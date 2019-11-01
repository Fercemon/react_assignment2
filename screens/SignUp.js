import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebase from '../firebase';

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null, name: ''}

  handleSignUp = () => {
  // TODO: Firebase stuff...
  firebase
      .auth()
      //when user submit we create user and then we navigate to the Main screen
      //if there is an error we catch it and display it
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Text style={{fontSize: 18}}>Already have an account? <Text style={{color: '#2196F3'}}
          onPress={() => this.props.navigation.navigate('Login')}
        >Login</Text></Text>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 8
  }
})