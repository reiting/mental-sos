import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Contacts from './src/screens/Contacts';

const Project= createStackNavigator({
  Home: {
   screen: Home
  },
  Contacts: {
    screen: Contacts
  },
  Profile: {
   screen: Profile
  }
});
export default createAppContainer(Project);