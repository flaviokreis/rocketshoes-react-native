import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Cart extends Component {
    static navigationOptions = {
        title: 'Rocketshoes',
    };

    render() {
        return (
            <>
                <Text>Home</Text>
                <TouchableOpacity
                    onPress={() => {
                        const { navigation } = this.props;

                        navigation.navigate('Cart');
                    }}
                >
                    <Text>Cart</Text>
                </TouchableOpacity>
            </>
        );
    }
}

export default Cart;
