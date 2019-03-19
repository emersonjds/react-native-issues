import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Issues from './pages/Issues';

import { colors } from './styles';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Issues
    },
    {
      defaultNavigationOptions: {
        headerTintColor: colors.darker,
        headerBackTitle: null
      }
    }
  )
);

export default Routes;
