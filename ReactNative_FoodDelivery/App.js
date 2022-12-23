/**
 * @nguyentruongkhoinguyen_FoodDelivery
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import screen:
import Orders from './src/screens/Orders';
import Restaurant from './src/screens/Restaurant';
import Tabs from './src/navigation/Tabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //Giấu Header trên:
        screenOptions={{headerShown: false}}
        //Đặt màn hình mặc định:
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Tabs}/>
        <Stack.Screen name="Order" component={Orders}/>
        <Stack.Screen name="Restaurant" component={Restaurant}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}