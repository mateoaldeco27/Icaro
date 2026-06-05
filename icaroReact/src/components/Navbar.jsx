import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ 
      backgroundColor: '#000103', 
      boxShadow: 'none', 
      border: '1px solid #515052', 
      margin: '5px' 
    }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly', padding: '15px 20px' }}>
        <Button color="inherit" component={Link} to="/usuario" sx={{ fontSize: '20px', fontFamily: 'Montserrat' }}>USUARIO</Button>
        <Button color="inherit" component={Link} to="/carrito" sx={{ fontSize: '20px', fontFamily: 'Montserrat' }}>CARRITO</Button>
        
        <Link to="/" style={{ display: 'flex' }}>
          <img src="/logo.png" alt="Logo" style={{ width: '150px' }} />
        </Link>
        
        <Button color="inherit" component={Link} to="/faq" sx={{ fontSize: '20px', fontFamily: 'Montserrat' }}>FAQ</Button>
        <Button color="inherit" component={Link} to="/shop" sx={{ fontSize: '20px', fontFamily: 'Montserrat' }}>SHOP</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;