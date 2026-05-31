import { useState, useEffect } from 'react';

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Definimos la función de carga
    const fetchProducts = async () => {
      try {
        setLoading(true); // 1. Activamos el loading
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        
        const data = await response.json();
        setProducts(data); // 3. Guardamos los productos
      } catch (err) {
        setError(err); // 4. Guardamos el error si falla
      } finally {
        setLoading(false); // 1. Desactivamos el loading siempre (salga bien o mal)
      }
    };

    fetchProducts();
  }, []); // <--- El array vacío es clave, esto evita el bucle infinito.

  return { products, loading, error };
};
