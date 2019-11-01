import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Strong} from 'react-native';
import firebase from '../../firebase';


export default class MonthsBodybuilder3 extends React.Component {
    static navigationOptions = ({ navigation }) => ({ // to set the title of the header
        title: "3 months BODYBUILDER"
    });

    months3Database = firebase.database().ref('Plans/3monthsBodybuilder/');

  //we create a empty object call plans as state where we will retrive the data later
  state = {months3: {}};

  componentDidMount() {
    this.months3Database.once('value', snapshot => {
      const month3Json = snapshot.val();
      
      //we push the exercices objet from our database to our exercices object
      this.setState({months3: month3Json});
    });
  } 
    render() {
      return (
        <ScrollView>
            <Image source={{uri: this.state.months3.img}} style={styles.container1}></Image>
            <Text style={styles.description}>
                <Text style={{fontWeight: 'bold'}}>About: </Text>
                <Text>{this.state.months3.about}</Text>
            </Text>
            <Text style={styles.description}>
                <Text style={{fontWeight: 'bold'}}>Duration: </Text>
                <Text>{this.state.months3.duration}</Text>
            </Text>
            <Text style={styles.description}>
                <Text style={{fontWeight: 'bold'}}>Goal: </Text>
                <Text>{this.state.months3.goal}</Text>
            </Text>
            <Text style={styles.description}>
                <Text style={{fontWeight: 'bold'}}>Requirements: </Text>
                <Text>{this.state.months3.requirements}</Text>
            </Text>
            <Text style={styles.description}>
                <Text style={{fontWeight: 'bold'}}>Target group: </Text>
                <Text>{this.state.months3.targetGroup}</Text>
            </Text>            
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
    container1: {
      width: '100%',
      height: 300,
    },
    description: {
        padding: 10,
        textAlign: 'center'
    }
  });