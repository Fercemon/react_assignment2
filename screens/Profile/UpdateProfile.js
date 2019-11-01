import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image } from 'react-native';
//import firebase
import firebase from '../../firebase';
import * as ImagePicker from 'expo-image-picker';
export default class UpdateProfile extends React.Component {
  state = { 
    name:'',
    height:'',
    weight:'',
    image: '',
    userDetails: {},
  }

  /*------- The first part until the end of componentDidMount is to get the default img. 
             The proccess is the same than in Profile screen                             -----*/
  userId = firebase.auth().currentUser.uid;
  userData = firebase.database().ref(`users/${this.userId}`);

  /* To get the current user image */
  componentDidMount() {
    this.userData.on('value', snapshot => {
        const userInfo = snapshot.val();
        if(!userInfo){
            this.setState({
              userDetails: {
                image: 'https://firebasestorage.googleapis.com/v0/b/workoutapp-79860.appspot.com/o/images%2Fback.jpg?alt=media&token=539288a5-620c-4fac-b9ea-d2939b3bd655',
              }
            })
        }else{
            this.setState({userDetails: userInfo});
        }
    });
  }

  /* -----------new part different than Profile screen---------------*/

  //To update the user image and info when they click on save
  handleProfile = () => {
      this.userData.set({
          name: this.state.name,
          height: this.state.height,
          weight: this.state.weight,
          image: this.state.image,
      }).then(() => this.props.navigation.navigate('Profile'))
  }

  //To access to device gallery or camera to select the image
    handleChoosePhoto = async () => {
      let result = await
      ImagePicker.launchImageLibraryAsync({
        mediaTypes:
        ImagePicker.MediaTypeOptions.All,
        allowsEditing: true, //to be able to crop the image
        aspect: [4, 4], // the proportion of the image
      });

      if(!result.cancelled){
        this.setState({image: result.uri}) // if the user select a image set that image url as image value
      }
    }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.profilePicContaainer} onPress={this.handleChoosePhoto}>
          <Image style={styles.profilePic} source={{uri: this.state.userDetails.image} }></Image>
          <Text style={styles.edditPic}>Eddit</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Profile info</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Full Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          placeholder="Height"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={height => this.setState({ height })}
          value={this.state.height}
        />
        <TextInput
          placeholder="Weight"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={weight => this.setState({ weight })}
          value={this.state.weight}
        />
        <Button title="Save" onPress={this.handleProfile} /> 
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
  profilePicContaainer: {
    position: 'relative',
    width: 150,
    height: 150,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    opacity: 0.5
  },
  edditPic: {
    position: 'absolute',
    top: 60,
    left: 55,
    fontSize: 20,
    fontWeight: 'bold',
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