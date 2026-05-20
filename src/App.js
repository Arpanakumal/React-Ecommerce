
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/tops' element={<ShopCategory category="tops"/>}/>
          <Route path='/skirts' element={<ShopCategory category="skirts"/>}/>
          <Route path='/hats' element={<ShopCategory category="hats"/>}/>
          <Route path='/jackets' element={<ShopCategory category="jackets"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path= ':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>

        

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
