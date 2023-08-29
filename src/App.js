//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//Commons
import Header from "./Commons/Header";
import Navbar from "./Commons/Navbar";
import Footer from "./Commons/Footer";

//Pages
import AboutUs from "./Pages/AboutUs";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Location from "./Pages/Location";
import Login from "./Pages/Login";
import FourOFour from "./Pages/FourOFour";
import SignUp from "./Pages/SignUp";
import User from "./Pages/User";
import UserCart from "./Pages/UserCart";
import UserEdit from "./Pages/UserEdit";
import Subscription from "./Pages/Subscription";
import ConfirmSubscription from "./Pages/ConfirmSubscription";
import MeetTheDevelopers from "./Pages/MeetTheDevelopers";
import TestComponent from "./MVPComponents/TestComponent";

//Components

import FilterButtonsComponent from "./MVPComponents/FilterButtonsComponent";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((response) => setCart(response.data));
  }, []);

  const handleAddToCart = (food) => {
    setCart([
      ...cart,
      {
        name: food.product_name,
        image: food.product_image,
        price: food.product_price,
        id: food.product_id,
      },
    ]);
  };

  const handleDeleteItem = (id) => {
    setCart(cart.filter((food) => food.product_id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header addToCart={handleAddToCart} />
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<TestComponent cart={cart} />} path="/test" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<FilterButtonsComponent />} path="/filter/:theme" />
          <Route
            element={
              <Cart
                addToCart={handleAddToCart}
                deleteItem={handleDeleteItem}
                clearCart={handleClearCart}
                cart={cart}
              />
            }
            path="/cart"
          />
          <Route element={<Location />} path="/location" />
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<User />} path="/user:id" />
          <Route element={<UserCart />} path="/user/:id/cart" />
          <Route element={<UserEdit />} path="/user/:id/edit" />
          <Route element={<Subscription />} path="/user/:id/subscription" />
          <Route
            element={<ConfirmSubscription />}
            path="/user/:id/subscription/confirmed"
          />
          <Route element={<MeetTheDevelopers />} path="/meet-the-developers" />
          <Route element={<FourOFour />} path="/*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
