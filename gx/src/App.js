
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Layout } from './components/layout'

import { CartProvider } from './providers/CartProvider'
import { Routes } from './Routes'

import './App.css';

function App() {
  return (
    <CartProvider>
      <Layout className="App">
        <Header />
          <Routes />
        <Footer />
      </Layout>
    </CartProvider>
  );
};

export default App;
