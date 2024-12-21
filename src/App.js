import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './footer/Footer';
import Header from './header/Header';
import Products from './products/Products';
import Profile from './profile/Profile';
import Wishlist from './wishlist/Wishlist';
import ProductDescripition from './productDescripition/ProductDescripition';
import MyCart from './cart/MyCart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Descripition" element={<ProductDescripition />} />
          <Route path="cart" element={<MyCart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
