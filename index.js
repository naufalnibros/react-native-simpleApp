// import library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a Component
const App = () => (
  <Text>This is a LearnApps</Text>
);

// Render it to the device
AppRegistry.registerComponent('TestApp', () => App);
// AppRegistry.registerComponent('folderNAme', () => App);
