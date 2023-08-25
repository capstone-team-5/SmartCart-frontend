// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Commons
import Header from './Commons/Header';
import Navbar from './Commons/Navbar';
import Footer from './Commons/Footer';

//Pages
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Location from './Pages/Location';
import Login from './Pages/Login';
import FourOFour from './Pages/FourOFour';
import SignUp from './Pages/SignUp';
import User from './Pages/User';
import UserCart from './Pages/UserCart';
import UserEdit from './Pages/UserEdit';
import Subscription from './Pages/Subscription';
import ConfirmSubscription from './Pages/ConfirmSubscription';
import MeetTheDevelopers from './Pages/MeetTheDevelopers';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        
        <Header />
        <Navbar />
        
        <Routes>

          <Route element={<Home />} path='/' />
          <Route element={<AboutUs />} path='/about-us' />
          <Route element={<Cart />} path='/cart' />
          <Route element={<Location />} path='/location' />
          <Route element={<Login />} path='/login' />
          <Route element={<SignUp />} path='/sign-up' />
          <Route element={<User />} path='/user:id' />
          <Route element={<UserCart />} path='/user/:id/cart' />
          <Route element={<UserEdit />} path='/user/:id/edit' />
          <Route element={<Subscription />} path='/user/:id/subscription' />
          <Route element={<ConfirmSubscription />} path='/user/:id/subscription/confirmed' />
          <Route element={<MeetTheDevelopers />} path='/meet-the-developers' />
          <Route element={<FourOFour />} path='/*' />

        </Routes>

        <Footer />
        
      </BrowserRouter>

    </div>
  );
}

export default App;
