import { Container, Typography, List, ListItem, ListItemText, Button, Divider } from '@mui/material';

const Carrito = () => {

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Tu contenido aquí */}
    </Container>
  );

  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Tu Carrito</Typography>
      
      {cart.length === 0 ? (
        <Typography sx={{ mt: 2 }}>El carrito está vacío.</Typography>
      ) : (
        <>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index} divider>
                <ListItemText primary={item.title} secondary={`$${item.price}`} />
                <Button color="error" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
              </ListItem>
            ))}
          </List>
          <Button variant="contained" color="secondary" onClick={clearCart} sx={{ mt: 2 }}>
            Vaciar Carrito
          </Button>
        </>
      )}
    </Container>
  );
};

export default Carrito;