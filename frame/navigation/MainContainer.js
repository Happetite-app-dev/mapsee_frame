import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import MapScreen from './screens/MapScreen';
import CollectScreen from './screens/CollectScreen';
import FriendScreen from './screens/FriendScreen';
import MyPageScreen from './screens/MyPageScreen';

//Screen names
const MapName="Map";
const CollectName="Collect";
const FriendName="Friend";
const MyPageName="MyPage";

const Stack= createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        /*
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Map') {
                    iconName = focused
                        ? 'map'
                        : 'map-outline';
                } else if (route.name === 'Friend') {
                    iconName = focused ? 'people' : 'people-outline';
                }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Friend" component={FriendScreen} />
      </Tab.Navigator>
    </NavigationContainer>*/


        
        <NavigationContainer>
            <Tab.Navigator
                initialRoutName={MapName}
                screenOptions={({route})=>({
                    tabBarIcon: ({focused,color,size})=>{
                        let iconName;
                        let rn=route.name;

                        if (rn===MapName) {
                            iconName=focused ? 'map':'map-outline';
                        } else if (rn===CollectName){
                            iconName=focused ? 'folder-open':'folder-outline';
                        } else if (rn===FriendName){
                            iconName=focused ? 'people':'people-outline';
                        } else if (rn===MyPageName){
                            iconName=focused ? 'person-circle':'person-circle-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>


                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: {paddingBottom:10, fontSzie: 10},
                    style: {padding:10, height: 70,}
                }}
                >

                <Tab.Screen name={MapName} component={MapScreen}/>
                <Tab.Screen name={CollectName} component={CollectScreen}/>
                <Tab.Screen name={FriendName} component={FriendScreen}/>
                <Tab.Screen name={MyPageName} component={MyPageScreen}/>
            </Tab.Navigator>
        </NavigationContainer>

    )
}