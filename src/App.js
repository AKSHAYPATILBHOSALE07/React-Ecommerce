import React from 'react';
import CartProvider from './context/CartContext.js';
import AppRouter from './routes/AppRouter.js';

import './style.css';


/* ⚠ Por favor leer el archivo readme 🙏*/
export default function App() {


  return (    
    <>
      <CartProvider>

        <AppRouter />

      </CartProvider> 
    </>
  );
}
