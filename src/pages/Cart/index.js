import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Cart extends Component {
    static navigationOptions = {
        title: 'Carrinho',
    };

    render() {
        return (
            <>
                <Text>Cart</Text>
                <TouchableOpacity
                    onPress={() => {
                        const { navigation } = this.props;

                        navigation.pop();
                    }}
                >
                    <Text>Home</Text>
                </TouchableOpacity>
            </>
        );
    }
}

export default Cart;
