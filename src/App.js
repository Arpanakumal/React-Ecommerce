
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import tops2 from './Components/Assets/tops2.jpg';
import skirts2 from './Components/Assets/skirts2.jpg';
import jacket2 from './Components/Assets/jacket2.jpg';
import hatBanner from './Components/Assets/hatsBanner.jpg';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/tops' element={<ShopCategory banner={tops2} category="tops" />} />
          <Route path='/skirts' element={<ShopCategory banner={skirts2} category="skirts" />} />
          <Route path='/hats' element={<ShopCategory banner={hatBanner} category="hats" />} />
          <Route path='/jackets' element={<ShopCategory banner={jacket2} category="jackets" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />



        </Routes>
        <Footer />
      </BrowserRouter>



    </div>
  );
}

export default App;
