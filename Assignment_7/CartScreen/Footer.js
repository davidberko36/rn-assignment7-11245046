import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useCart } from '../CartContext';

export default function Footer() {
    const { cart } = useCart();

    const totalSum = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
        <View style={{flexDirection: 'row',gap: 185}}>
        <Text style={{marginLeft: 10, fontSize: 20, fontWeight: '300', color: '#000000', }}>EST Total:</Text>
        <Text style={styles.totalText}> ${totalSum.toFixed(2)}</Text>
        </View>

        <View style={styles.container}>
            <View style={styles.totalContainer}>
                <Image style={{tintColor: 'white'}} source={require('../assets/shoppingBag.png')} />
                <Text style={{color: 'white', fontSize: 21, }}>CHECKOUT</Text>
            </View>
        </View>
        </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'black',
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC',
        alignItems: 'center',
    },
    totalContainer: {
        flexDirection: 'row',
        marginTop: 5,
        gap: 30,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#D18035',
    },
});
