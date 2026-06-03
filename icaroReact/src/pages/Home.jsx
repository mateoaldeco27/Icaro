import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';

const Home = () => {
  const { products, loading, error } = useFetchProducts();

  return (
    <div className="home-container">
      {/* 1. Banner para mantener la estética original */}
      <Banner />

      {/* 2. Sección de productos */}
      <div style={{ padding: '20px' }}>
        <h1 style={{ color: '#fff', textAlign: 'center' }}>CATÁLOGO</h1>
        
        {loading && <h1 style={{ color: '#fff' }}>Cargando productos...</h1>}
        {error && <h1 style={{ color: 'red' }}>Error al cargar: {error.message}</h1>}

        <div className="grid-productos" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;