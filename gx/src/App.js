
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Layout } from './components/layout';


import { Product } from './pages/product';

import './App.css';

function App() {
  return (
    <Layout className="App">
      <Header />
        <Product />
      <Footer />
    </Layout>
  );
};

export default App;
