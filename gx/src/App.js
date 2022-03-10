
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Layout } from './components/layout';


import { Product } from './pages/product';

import { CartProvider } from './providers/CartProvider'

import './App.css';

function App() {
  return (
    <CartProvider>
      <Layout className="App">
        <Header />
          <Product />
        <Footer />
      </Layout>
    </CartProvider>
  );
};

export default App;
