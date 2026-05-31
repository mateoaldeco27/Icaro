import { useState, useEffect } from 'react';

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Aquí va tu llamada a la API (puedes usar https://fakestoreapi.com/products)
    // 1. Activa el loading
    // 2. Realiza el fetch
    // 3. Si sale bien, haz setProducts(data) y setLoading(false)
    // 4. Si sale mal, haz setError(error) y setLoading(false)
  }, []);

  return { products, loading, error };
};