import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import the different screens
import Loading from './screens/Loading';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Main from './screens/Main';
// create our app's navigation stack
const App = createSwitchNavigator(
  {
    Loading: {screen: Loading},
    SignUp: {screen: SignUp},
    Login: {screen: Login},
    Main: {screen: Main},
  },
  {
    initialRouteName: 'Loading'
  }
)
export default createAppContainer(App);