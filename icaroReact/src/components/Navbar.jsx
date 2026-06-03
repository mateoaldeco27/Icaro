import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const Navbar = () => {
  return (
    <header style={{ backgroundColor: '#000', padding: '20px', borderBottom: '1px solid #333' }}>
      <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
        <Link to="/usuario" style={{ color: 'white', textDecoration: 'none' }}>USUARIO</Link>
        <Link to="/carrito" style={{ color: 'white', textDecoration: 'none' }}>CARRITO</Link>
        
        {/* Logo central tal cual tu HTML */}
        <Link to="/">
          <img src="/logo.png" alt="SINISTER" style={{ height: '60px' }} />
        </Link>
        
        <Link to="/faq" style={{ color: 'white', textDecoration: 'none' }}>FAQ</Link>
        <Link to="/shop" style={{ color: 'white', textDecoration: 'none' }}>SHOP</Link>
      </nav>
    </header>
  );
};

export default Navbar;