import { AppRegistry ,View , Text, TouchableOpacity} from 'react-native';
import App from './App';
import React , {Component} from "react";
import Runapp from './src/Runapp';
import home from './src/screens/home';
import router from './src/router';

AppRegistry.registerComponent('NavigationDemo', () => Runapp);
