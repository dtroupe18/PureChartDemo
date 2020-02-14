import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GraphScreen from "./src/screens/GraphScreen";

const navigator = createStackNavigator({
  GraphScreen: GraphScreen,
}, {
  initialRouteName: 'GraphScreen'
});

const App = createAppContainer(navigator);

export default App;