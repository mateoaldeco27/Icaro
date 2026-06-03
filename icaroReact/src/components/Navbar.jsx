<Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
  <img 
    src="/logo.png" 
    alt="SINISTER" 
    style={{ height: '40px', display: 'block' }} 
  />
</Link>
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Usamos un texto por ahora para asegurar que no falle por la ruta de la imagen */}
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
          SINISTER
        </Link>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/usuario">USUARIO</Button>
          <Button color="inherit" component={Link} to="/carrito">CARRITO</Button>
          <Button color="inherit" component={Link} to="/faq">FAQ</Button>
          <Button color="inherit" component={Link} to="/shop">SHOP</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;