import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import List from './screens/List';
import Detail from './screens/Detail';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

class App extends React.Component {
  render() {
    return (
      <List />
    );
  }
}

StatusBar.setBarStyle('light-content');

const RootNavigator = createStackNavigator({
  List: List,
  Detail: Detail,
}, {
  defaultNavigationOptions: {
    headerTitleStyle: { flex:1, textAlign: 'center'},
    title:'Contacts',

    headerStyle: {
      backgroundColor: '#2a3daa',
    },

    headerTintColor: '#ffffff'
  }
});

export default createAppContainer(RootNavigator);
