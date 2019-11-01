import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import firebase from '../../firebase';


export default class PlanScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({ // to set the title of the header
    title: "Workout Plans",
})

  //we do exactly the same we did on home page. We just type plans where we have exercices and plan where we have exercice
plansDatabase = firebase.database().ref('Plans/');

  //we create a empty object call plans as state where we will retrive the data later
  state = {plans: {}};

  componentDidMount() {
    this.plansDatabase.once('value', snapshot => {
      const planJson = snapshot.val();
      
      //we push the exercices objet from our database to our exercices object
      this.setState({plans: planJson});
    });
  } 
    render() {
      return (
        <ScrollView contentContainerStyle={styles.pageWrapp}>
        {
          //to get an array from our object and be able to loop through it
          Object.keys(this.state.plans).map((plan, index) =>
            // we use toucableOpacity to be able to add onPress function since it's not possible with View
            <TouchableOpacity key={index} style={styles.wrapp} onPress={() => { 
              this.props.navigation.navigate(this.state.plans[plan].link) //to navigate to pages
            }}>
              <Image source= {{uri: this.state.plans[plan].img}} style={styles.container1 }></Image>
              <Text style={styles.price}>{this.state.plans[plan].price}</Text>
              <View style={styles.overlay}>
                <Text style={styles.exercice}>{this.state.plans[plan].title}</Text>
              </View>
            </TouchableOpacity>
          )
        }
      </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  pageWrapp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  wrapp: {
    width: '48%',
    height: 200,
    position: 'relative',
   
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
  },
  exercice: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    position: 'absolute',
    top: 4,
    left: 4,
    color: '#fff'
  }
});