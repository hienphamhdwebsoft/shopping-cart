import { useState } from 'react'
import { useQuery } from 'react-query'
// Components
import { Grid, Drawer, LinearProgress, Badge } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
// Styles
import { Wrapper } from "./App.style"
import { CartItemType } from './models'
import { Item } from './components/Item/Item'


const getProducts = async (): Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>('prducts', getProducts);

  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Somthing went wrong...</div>

  return (
    <Wrapper>
      <Grid container spacing={2}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
