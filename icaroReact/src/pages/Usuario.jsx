import { Container, Typography } from '@mui/material';

const Usuario = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Perfil de Usuario</Typography>
      <Typography sx={{ mt: 2 }}>Bienvenido a tu cuenta en SINISTER.</Typography>
    </Container>
  );
};

export default Usuario;