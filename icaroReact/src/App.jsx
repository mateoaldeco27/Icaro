import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Carrito from './pages/Carrito';
import Faq from './pages/Faq';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ 
        margin: '5px', 
        border: '1px solid #515052', 
        minHeight: 'calc(100vh - 10px)',
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: '#000103'
      }}>
        <Navbar />
        <Box component="main" sx={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;