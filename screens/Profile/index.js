import { createStackNavigator} from 'react-navigation-stack';
import Profile from './Profile';
import UpdateProfile from './UpdateProfile';
import { fromLeft } from 'react-navigation-transitions';

// create a stackNavigator with transition fromLeft

export default createStackNavigator({ // inside we put all the components we want to be part of the stackNavigator
    Profile,
    UpdateProfile,
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