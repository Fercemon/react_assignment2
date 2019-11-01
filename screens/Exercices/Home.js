import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import firebase from '../../firebase';
import { AuthSession } from 'expo';

// create component
export default class HomeScreen extends React.Component {

  //here we can set the title, add buttons to the nav bar, add styles, etc for the component
  static navigationOptions = ({ navigation }) => ({
    title: "Workout Exercices",
  })

  //we store the firebase in to the variable exercicesDatabase
  //we set the ref to Exercices to point to that path in our database
  exercicesDatabase = firebase.database().ref('Exercices/');

  //we create a empty object call exercices as state where we will retrive the data later
  state = {exercices: {}};

  componentDidMount() {
    this.exercicesDatabase.once('value', snapshot => {
      const exerciceJson = snapshot.val();
      
      //we push the exercices objet from our database to our exercices object
      this.setState({exercices: exerciceJson});
    });
  } 

  render() {

    return (
      <ScrollView>
        {
          //to get an array from our object and be able to loop through it
          Object.keys(this.state.exercices).map((exercice, index) =>
            // we use toucableOpacity to be able to add onPress function since it's not possible with View
            <TouchableOpacity key={index} style={styles.wrapp} onPress={() => { 
              this.props.navigation.navigate(this.state.exercices[exercice].title) //to navigate to pages
            }}>
                <Image source= {{uri: this.state.exercices[exercice].img}} style={styles.container1 }></Image>
                <View style={styles.overlay}>
                <Text style={styles.exercice}>{this.state.exercices[exercice].title}</Text>
                </View>
            </TouchableOpacity>
          )
        }
      </ScrollView>
      
    )
  }
}

const styles = StyleSheet.create({
  wrapp: {
    width: '100%',
    height: 200,
    alignItems: 'flex-end',
    position: 'relative',
    borderColor: '#fff',
    borderWidth: 4,
  },
  container1: {
    alignSelf: "flex-end",
    width: '50%',
    height: 192,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '50%',
    backgroundColor: '#000',
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    borderRightColor: 'orange',
    borderRightWidth: 4
  },
  exercice: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});