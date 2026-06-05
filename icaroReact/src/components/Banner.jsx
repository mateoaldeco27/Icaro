import { Box, Typography } from '@mui/material';

// src/components/Banner.jsx
const Banner = () => {
  return (
    <Box sx={{ width: '100%', height: '600px', overflow: 'hidden' }}>
      <img 
        src="/tu-imagen-banner.jpg" 
        alt="Banner" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
    </Box>
  );
};

export default Banner;