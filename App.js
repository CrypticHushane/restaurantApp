
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './screens/SearchScreen';

const navigator = createStackNavigator({
    Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions : {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);

