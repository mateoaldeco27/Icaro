import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ width: '100%', height: '600px', backgroundColor: '#000103' }}>
      <img 
        src="/banner.jpg" 
        alt="Banner Principal" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          display: 'block' 
        }} 
      />
    </Box>
  );
};

export default Home;