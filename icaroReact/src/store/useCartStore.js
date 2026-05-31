import { create } from 'zustand';

const useCartStore = create((set) => ({
  // 1. ESTADO: Aquí guardas tus datos
  cart: [],

  // 2. ACCIONES: Aquí van las funciones para modificar el estado
  
  // Agregar al carrito
  addToCart: (product) => set((state) => ({ 
    cart: [...state.cart, product] 
  })),

  // Eliminar del carrito por ID
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== productId)
  })),

  // Vaciar el carrito
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;