import { Box, Typography } from '@mui/material';

const Banner = () => {
  return (
    <Box sx={{ width: '100%', mt: 2, textAlign: 'center' }}>
      {/* Banner Principal */}
      <Box sx={{ position: 'relative' }}>
        <img src="/banner.jpeg" alt="Banner Sinister" style={{ width: '100%', display: 'block' }} />
        <Box sx={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)' }}>
          <a href="/shop" style={{ color: 'white', fontSize: '2rem', textDecoration: 'none', fontWeight: 'bold' }}>DROP 1</a>
        </Box>
      </Box>

      {/* Aquí podrías insertar tus tarjetas de productos */}
      <Typography variant="h5" sx={{ my: 4, color: 'white' }}>NUEVOS INGRESOS</Typography>
    </Box>
  );
};

export default Banner;