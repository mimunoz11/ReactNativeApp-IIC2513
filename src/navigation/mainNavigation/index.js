import React from 'react' ;
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpaceNavigation from './SpaceNavigation';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Spaces" component={SpaceNavigation} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
