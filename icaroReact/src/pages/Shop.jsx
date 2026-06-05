import { Container, Typography } from '@mui/material';

const Shop = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, minHeight: '60vh' }}>
      <Typography variant="h3" sx={{ color: '#fff', textAlign: 'center', mb: 4 }}>
        SHOP
      </Typography>
      {/* Aquí irá tu lógica de productos o contenido */}
    </Container>
  );
};

export default Shop;