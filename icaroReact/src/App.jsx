import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'; // Importamos Box
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Faq from './pages/Faq';
import Carrito from './pages/Carrito';
import Usuario from './pages/Usuario';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      {/* Box con minHeight: 100vh asegura que el footer siempre esté al pie */}
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar /> 
        
        <Box sx={{ flex: 1 }}> {/* Esto empuja el footer hacia abajo */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/usuario" element={<Usuario />} />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;