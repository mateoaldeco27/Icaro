import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#000', color: 'white', py: 3, mt: 'auto', textAlign: 'center' }}>
      <Container>
        <Typography variant="body2">
          Sinister - 2026. Todos los derechos reservados.
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>Instagram</Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>WhatsApp</Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>Email</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;