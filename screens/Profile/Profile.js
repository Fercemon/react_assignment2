import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import firebase from '../../firebase';

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({ // to set the title of the header
    title: "Profile",
});

// store currentUser id in to userId variable
userId = firebase.auth().currentUser.uid;

/*----- we use the userId with the currentUid as a reference to our firebase.
        This way our userFirebase is now in the path projectname/users/currentUserId 
       and we can set to or retrive data from it                             ------*/
userFirebase = firebase.database().ref(`users/${this.userId}`);

//we get the default profile picture from firbase storage
defaultProfilePicture = firebase.storage().ref('images/back.jpg')

state = {
    currentUser: null,
    userDetails: {},
  };

  componentDidMount() {
    //when the data in our database change we call the function.
    //snapshot contain the data in our userFirebase path. You can call it as you like
    this.userFirebase.on('value', snapshot => {
        //we store the value of snapshot(currentUserId in this case) in to the variable user info
        const userInfo = snapshot.val();

        /* To avoid errors the first time the user goes to Profile page,
           where the userInfo object would be still null, we set some Default data to it*/
        if(!userInfo){
            this.setState({
              userDetails: {
                name: 'Default Name',
                height: 'height ',
                weight: 'weight ',
                image: 'https://firebasestorage.googleapis.com/v0/b/workoutapp-79860.appspot.com/o/images%2Fback.jpg?alt=media&token=539288a5-620c-4fac-b9ea-d2939b3bd655',
              }
            })
        }else{
            this.setState({userDetails: userInfo});
        }
    });
  }
    render() { 
      return (
        <ScrollView contentContainerStyle={styles.container}>
          <Image style={styles.profilePic} source={{uri: this.state.userDetails.image} }></Image>
          <View>
            <Text style={styles.text}>
              Hi {this.state.userDetails.name}!
            </Text>
            <Text style={styles.text}>
              <Text style={{fontWeight: 'bold'}}>Height: </Text>
               {this.state.userDetails.height}cm
            </Text>
            <Text style={styles.text}>
                <Text style={{fontWeight: 'bold'}}>Weight: </Text>
                {this.state.userDetails.weight}cm
            </Text>
            <View style={styles.buttons}>
              <Button title='Edit Profile' onPress={() => {this.props.navigation.navigate('UpdateProfile')}}/>
            </View>
            <View style={styles.buttons}>
              <Button title='Logout' onPress={() => firebase.auth().signOut()}/>
            </View>
          </View>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 150/2
  },
  text: {
    marginTop: 15,
  },
  buttons: {
    marginTop: 20
  }
})