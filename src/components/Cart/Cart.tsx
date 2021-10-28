import React from 'react';
// Types
import { CartItemType } from '../../models';
// Styles
import { Wrapper } from './Cart.style';
import { CartItem } from '../CartItem/CartItem';
import { Typography } from '@material-ui/core';


export interface CartProps {
    cartItems: CartItemType[];
    addToCart: (clikedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

export function Cart({ cartItems, addToCart, removeFromCart }: CartProps) {
    return (
        <Wrapper>
            <Typography align='center' variant='h4'>
                Your Shopping Cart
            </Typography>
            {cartItems.length === 0 ? <p>No item in cart</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
        </Wrapper>
    );
}
