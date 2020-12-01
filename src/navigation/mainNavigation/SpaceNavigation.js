import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import SpaceListScreen from '../../screens/SpaceListScreen'
import SpaceScreen from '../../screens/SpaceScreen'

const Stack = createStackNavigator();

export default function SpaceNavigation() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Spaces" component={SpaceListScreen} />
            <Stack.Screen name="Space" component={SpaceScreen} />
        </Stack.Navigator>
    );
}