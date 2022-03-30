
import { CartProvider } from './providers/CartProvider'
import { Routes } from './Routes'
import { AuthProvider } from './providers/AuthProvider'

import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
