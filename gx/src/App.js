
import { Header } from './components/header';
import { Footer } from './components/footer';

// import { Home } from './pages/home'
import { Product } from './pages/product'

import './App.css';

function App() {
  return (
    <div className="App container">
      <Header />
        <Product />
      <Footer />
    </div>
  );
};

export default App;
