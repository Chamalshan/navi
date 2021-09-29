//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './assets/Screens/DashboardScreen';
import CDashboard from './assets/Screens/CDashborad';
import { StatusBar } from 'expo-status-bar';

// function HomeScreen(){
//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text>This is home page</Text>
//     </View>
//   )
// }

// function ProfileScreen(){
//   return(
//     <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
//       <Text>This is profile Screen</Text>
//     </View>
//   )
// }

const Appstack = createStackNavigator();

const App=()=>{
  return (
    <NavigationContainer styles={styles.container}>
      <StatusBar style='dark'/>
      <CDashboard/>
      {/* <Dashboard/> */}
    </NavigationContainer>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFE5DA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
  },
});
