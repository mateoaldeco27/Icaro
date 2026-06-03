import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', padding: '10px' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.title}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <Box sx={{ padding: 2 }}>
        <Button variant="contained" fullWidth color="primary">
          Agregar al carrito
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;