import React from 'react';
import { Button } from '@material-ui/core'
// Types
import { CartItemType } from '../../models'
// Styles
import { Wrapper } from './Item.style'

export interface ItemProps {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

export function Item({ item, handleAddToCart }: ItemProps) {
    return (
        <Wrapper>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>$&nbsp;{item.price}</h3>
            </div>
            <Button variant='contained' onClick={() => handleAddToCart(item)}>Add to cart</Button>
        </Wrapper>
    );
}