import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from "./containers/Home"
import Detail from "./containers/Detail"
import MapView from "./containers/MapView"
import { StatusBar } from 'react-native'

const Stack = createStackNavigator(),
    Drawer = createDrawerNavigator(),
    App = props => {
        return (
            <NavigationContainer>
                <StatusBar barStyle="dark-content" />
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: 'Overview'
                        }}
                    />
                    <Drawer.Screen
                        name="Detail"
                        component={Detail}
                        options={{
                            title: 'Detail'
                        }}
                    />
                    <Drawer.Screen
                        name="MapView"
                        component={MapView}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }

export default App
