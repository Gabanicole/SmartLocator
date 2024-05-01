import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import UserProfileScreen from './screens/UserProfileScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false, // Hide the header for the Home screen
    },
  },
  UserProfile: {
    screen: UserProfileScreen,
    navigationOptions: {
      title: 'User Profile',
    },
  },
});

export default createAppContainer(AppNavigator);
