import { createStackNavigator} from 'react-navigation-stack';
import PlanScreen from './Plan';
import MonthsBodyBuilder3 from './MonthsBodyBuilder3';
import { fromBottom } from 'react-navigation-transitions';

// create a stackNavigator with transition fromBottom
export default createStackNavigator({ // inside we put all the components we want to be part of the stackNavigator
    PlanScreen,
    MonthsBodyBuilder3
},
{
//commun settings for this stackNavigator
defaultNavigationOptions: {
    headerStyle: {
    backgroundColor: 'grey',
    }
},
//to set the desire transition
    transitionConfig: () => fromBottom(),
});