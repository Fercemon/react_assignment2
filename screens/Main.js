import React from 'react'
import { StyleSheet, Text, View, } from 'react-native';
import firebase from '../firebase';
// Import the components we need from the package
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './Exercices';
import PlanScreen from './Plans';
import ProfileScreen from './Profile';

// create a variable to store the function createBottomTabNavigator
const tabNavigator = createBottomTabNavigator({
  Exercices: HomeScreen,
  Plans: PlanScreen,
  Profile: ProfileScreen
},
{
  //to add styles to the tabNavigator
  tabBarOptions: {
    activeTintColor: 'orange', 
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 20,
      paddingTop: 0
    }
  }
}
);


// we use createAppContainer as our app's route component
// the createAppContainer is a function that return a component.
export default createAppContainer(tabNavigator)// using tabNavigator as a parameter, we include its components inside the app component

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



/* export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}
render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button title='Logout' onPress={() => firebase.auth().signOut()}/>
      </View>
    )
  }
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
*/