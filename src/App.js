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
import EditProfile from './profile/EditProfile';
import SignUp from './auth/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Descripition" element={<ProductDescripition />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
