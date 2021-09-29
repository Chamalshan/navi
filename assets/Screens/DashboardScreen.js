import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AppointmentScreen from './AppointmentScreen';
import ProfileScreen from './ProfileScreen';

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


const Tab = createBottomTabNavigator();

const Dashboard=({navigation})=>{
  return (
      <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
             ...styles.bottom,
            }
            
          }}
        >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            tabBarIcon: ({ focused }) => (
                <View style={{
                    top:15,
                    justifyContent:'center',
                    alignItems:'center',            
                    width:50,
                    height:50,
                    backgroundColor: focused ? '#3A292A' : '#fff',
                    borderRadius: 25,
                }}>
                    <Image 
                     source={require ('../Icons/Home.png')} 
                     resizeMode='contain'
                     style={{
                         width:30,
                         height:30,
                         tintColor: focused ? '#fff' : '#3A292A',
                    }}/>
                </View>
            ),
        }} />
        <Tab.Screen name="Appointment" component={AppointmentScreen}
         options={{
            tabBarIcon: ({ focused }) => (
                <View style={{
                    top:15,
                    justifyContent:'center',
                    alignItems:'center',            
                    width:50,
                    height:50,
                    backgroundColor: focused ? '#3A292A' : '#fff',
                    borderRadius: 25,
                }}>
                    <Image 
                     source={require ('../Icons/Appointment.png')} 
                     resizeMode='contain'
                     style={{
                         width:30,
                         height:30,
                         tintColor: focused ? '#fff' : '#3A292A',
                    }}/>
                </View>
            ),
        }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
         options={{
            tabBarIcon: ({ focused }) => (
                <View style={{
                    top:15,
                    justifyContent:'center',
                    alignItems:'center',            
                    width:50,
                    height:50,
                    backgroundColor: focused ? '#3A292A' : '#fff',
                    borderRadius: 25,
                }}>
                    <Image 
                     source={require ('../Icons/Profile.png')} 
                     resizeMode='contain'
                     style={{
                         width:30,
                         height:30,
                         tintColor: focused ? '#fff' : '#3A292A',
                    }}/>
                </View>
            ),
        }}
        />
      </Tab.Navigator>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFE5DA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottom:{
    //position: 'absolute',
    bottom:25,
    elevation:0,
    backgroundColor: '#fff',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
        
    },

   shadow:{
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 0,
    },
    
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
   }, 
});
