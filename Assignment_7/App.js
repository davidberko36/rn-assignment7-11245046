import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen/HomeScreen';
import ProductScreen from './ProductDetailsScreen/ProductScreen'
import CartScreen from './CartScreen/CartScreen';
import { CartProvider } from './CartContext';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />          
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
