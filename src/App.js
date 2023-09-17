// import logo from './logo.svg';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/footer/MyFooter';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Portofolio from './pages/portofolio/Portofolio';
import Shop from './pages/shop/Shop';
import SingleShop from './pages/singleShopProducts/SingleShop';
import Cart from './pages/cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calcTotal } from './store/slices/cartSlice';
import { getData } from './store/slices/singlePageData';
import SingleGallery from './pages/singleGallery/SingleGallery';
import Modern from './pages/modernPage/Modern';
import WishList from './pages/wishList/WishList';
import MyContact from './pages/contact/MyContact';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton';

function App() {
  const dispatche = useDispatch()
  const cartItems = useSelector(state => state.cartReducer.cart)
  const totalItems = useSelector(state => state.cartReducer.totalItems)
  const totalPrice = useSelector(state => state.cartReducer.totalPrice)
  useEffect(()=>{
    dispatche(calcTotal())
    dispatche(getData())
  }, [dispatche, totalPrice, totalItems, cartItems])
  return (
    <div className="App">
    <>
    <MyNav />
    <ScrollToTopButton/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portofolio' element={<Portofolio/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/:prodId' element={<SingleShop/>} />
        <Route path='/portofolio/:prodId' element={<SingleGallery/>} />
        <Route path='/portofolio/modern' element={<Modern/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishList' element={<WishList/>}/>
        <Route path='/contact' element={<MyContact/>}/>
      </Routes>
      <MyFooter/>
    </>


    </div>
  );
}

export default App;
