import React, { Component } from 'react';

import Feed from './feed';

import Detail from './details';

import App1 from './Camera'

import Screen1 from './screens/drawer/screen1';
import Screen2 from './screens/drawer/screen2';
import Screen3 from './screens/drawer/screen3';

import Tab1 from './screens/tabs/Tab1';
import Tab2 from './screens/tabs/Tab2';
import Tab3 from './screens/tabs/Tab3';


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();


export default class App extends Component {

    createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Feed" 
      component={Feed} 
      options={{ title: "GoApp"}}
      />
      <Stack.Screen name="Scanner"
      children={this.createBottomTabs} 
      options={{ title: "GoApp"}}
      />
    </Stack.Navigator> 

    createBottomTabs = () => {

      return <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen 
        name="Scanner" 
        component={App1}
        options={{ title: "Scanner QRCode",
        headerStyle: {backgroundColor:"white"} }}
        />
        <MaterialBottomTabs.Screen name="detail" 
        component={Detail} 
        options={{ title: "Promotions" }}
        />
    </MaterialBottomTabs.Navigator>
    }


  render() {
        return (
      <NavigationContainer> 
       <Drawer.Navigator>
         <Drawer.Screen name="Home" children={this.createHomeStack} />
         <Drawer.Screen name="Contacts" component={Screen1} />
         <Drawer.Screen name="Favorites" component={Screen2} />
         <Drawer.Screen name="Settings" component={Screen3} />
       </Drawer.Navigator>
      </NavigationContainer>        
    );
  }
}
