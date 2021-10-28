import { useState } from 'react'
import { useQuery } from 'react-query'
// Components
import { Grid, Drawer, LinearProgress, Badge } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
// Styles
import { Wrapper, StyledButton } from "./App.style"
import { CartItemType } from './models'
import { Item } from './components/Item/Item'
import { Cart } from './components/Cart/Cart'
import { CartItem } from './components/CartItem/CartItem'


const getProducts = async (): Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>('prducts', getProducts);

  const getTotalItems = (items: CartItemType[]) => items.reduce((total: number, item) => total + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Somthing went wrong...</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)} >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCart />
        </Badge>
      </StyledButton>
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
