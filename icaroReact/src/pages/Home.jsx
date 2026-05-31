import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard'; // Importamos el componente

const Home = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <h1>Cargando productos...</h1>;
  if (error) return <h1>Error al cargar: {error.message}</h1>;

  return (
    <div className="home-container">
      <h1>Catálogo de Productos</h1>
      <div className="grid-productos">
        {/* Usamos el componente ProductCard aquí */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;