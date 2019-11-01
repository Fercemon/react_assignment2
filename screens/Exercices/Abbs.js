import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import firebase from '../../firebase';

export default class Abbs extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Abss exercices"
    });

  //we do the same we did on home page to get the data from firebase
  abbsDatabase = firebase.database().ref('Exercices/abbs/abbsExercices');
  state = {abbs: {}};

  componentDidMount() {
    this.abbsDatabase.once('value', snapshot => {
      const abbsJson = snapshot.val();
      this.setState({abbs: abbsJson});
    });
  }
    render() {
        return (
          <ScrollView>
            {
              //to get an array from our object and be able to loop through it
              Object.keys(this.state.abbs).map((abb, index) =>
              <View key={index} style={styles.wrapp}>
              <Image source={{uri: this.state.abbs[abb].img} } style={styles.container1}></Image>
                <View style={styles.overlay}>
              <Text style={styles.exercice}>{this.state.abbs[abb].title}</Text>
              </View>
            </View>
              )
            }
          </ScrollView>
        );
      }
  }
  
  const styles = StyleSheet.create({
    wrapp: {
      width: '100%',
      height: 200,
      position: 'relative',
      borderColor: '#fff',
      borderWidth: 4
    },
    container1: {
      width: '100%',
      height: 192,
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 'auto',
      width: '100%',
      backgroundColor: '#000',
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
    },
    exercice: {
      color: 'orange',
      fontSize: 18,
      fontWeight: 'bold'
    }
  });