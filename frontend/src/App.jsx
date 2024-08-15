import React,{useState} from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Order from './pages/Order'
import Footer from './components/Footer';
import LoginPopup from './components/LoginPopup';
import Verify from './pages/Verify';
import MyOrder from './pages/MyOrder';

function App() {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='w-[80%] m-auto'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrder/>}/>
      </Routes>
      </div>
      <Footer/>
    </>

  )
}

export default App