import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Home';
import Abbs from './Abbs';
import Back from './Back';
import { fromLeft } from 'react-navigation-transitions';

// create a stackNavigator with transition fromLeft

export default createStackNavigator({ // inside we put all the components we want to be part of the stackNavigator
    HomeScreen,
    Abbs,
    Back
},
{
//commun settings for this stackNavigator
    defaultNavigationOptions: {
        headerStyle: {
        backgroundColor: 'grey',
        }
    },
    //to set the desire transition
    transitionConfig: () => fromLeft(),
});