import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      backgroundColor: '#515052', 
      border: '1px solid #515052', 
      margin: '5px', 
      height: '100px', 
      width: 'calc(100% - 10px)', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 1 }}>
        <Link href="https://www.instagram.com/"><img src="/ig.png" style={{ width: '30px' }} /></Link>
        <Link href="https://wa.me/"><img src="/whatsapp.png" style={{ width: '30px' }} /></Link>
        <Link href="mailto:email@example.com"><img src="/email.png" style={{ width: '30px' }} /></Link>
      </Box>
      <Typography sx={{ color: '#FFFFFA', fontFamily: 'Montserrat', fontSize: '14px' }}>
        Sinister - 2026. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;