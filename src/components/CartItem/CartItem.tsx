import * as React from 'react';
import { Button, Typography } from '@material-ui/core';
// Types
import { CartItemType } from '../../models';
// Styles
import { Wrapper } from './CartItem.style'


export interface CartItemProps {
    item: CartItemType;
    addToCart: (clikedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}



export function CartItem({ item, addToCart, removeFromCart }: CartItemProps) {
    return (
        <Wrapper>
            <div>
                <Typography variant='h5'>
                    {item.title}
                </Typography>
                <div className="infomation">
                    <p>Price: $&nbsp;{item.price}</p>
                    <p>Total: $&nbsp;{(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className="buttons">
                    <Button
                        size='small'
                        disableElevation
                        variant='outlined'
                        onClick={() => removeFromCart(item.id)}
                    >
                        -
                    </Button>
                    <p>{item.amount}</p>
                    <Button
                        size='small'
                        disableElevation
                        variant='outlined'
                        onClick={() => addToCart(item)}
                    >
                        +
                    </Button>
                </div>
            </div>
            <img src={item.image} alt={item.title} />
        </Wrapper>
    );
}
