import React from "react";
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../View/Home/Index";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Supermercado } from "../View/Supermercado/Index";
import { Alterar } from "../View/Alterar/Index";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

export type RootTabParamList ={
    Home: undefined;
    Supermercado: {id: string};
    Alterar: {id: string};
}

const Tab = createBottomTabNavigator<RootTabParamList>()
const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary: 'purple',
        background: 'white',
    }
}

export const Routes = () => {
    return(
        <NavigationContainer theme={MyTheme}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            /> 
            <Stack.Screen
                name="Supermercado"
                component={Supermercado}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Alterar"
                component={Alterar}
                options={{
                    headerShown: false
                }}
            /> 
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({color})=> (
                            <MaterialCommunityIcons name="home" color={color} size={26}/>),
                        tabBarShowLabel: false,
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Supermercado"
                    component={Supermercado}
                    options={{
                        tabBarIcon: ({color})=> (
                            <MaterialCommunityIcons name="account-multiple-plus" color={color} size={26}/>),
                        tabBarShowLabel: false,
                        headerShown: false
                    }}
                />
            </Tab.Navigator>                        
        </NavigationContainer>        
    );
};




