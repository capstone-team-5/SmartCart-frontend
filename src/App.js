//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//Commons
import Header from "./Commons/Header";
import Navbar from "./Commons/Navbar";
import Footer from "./Commons/Footer";
import MailingListComponent from "./Commons/MailingListComponent";

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

import IndividualProduct from "./Pages/IndividualProduct";
import ContactUs from "./Pages/ContactUs";

//Components
import FilterButtonComponent from "./MVPComponents/FilterButtonComponent";
import FilterResultsComponent from "./MVPComponents/FilterResultsComponent";

function App() {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/products`)
      .then((response) => setCart(response.data))
      .catch((error) => console.log(error));
  }, []);



  const handleAddToCart = (food) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === food.product_id
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].length += 1;
    } else {
      updatedCart.push({
        name: food.product_name,
        image: food.product_image,
        id: food.product_id,
        length: 1,
      });
    }
    
  setCart(updatedCart);
  setCartLength((previousCartLength) => previousCartLength + 1);
    
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
          <Route element={<Home addToCart={handleAddToCart} />} path="/" />
          {/* <Route element={<TestComponent cart={cart} />} path='/test' /> */}
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<ContactUs />} path="/contact-us" />
          <Route element={<IndividualProduct handleAddToCart={handleAddToCart} cartLength={cartLength} />} path="/product/:id" />
          <Route element={<FilterButtonComponent />} path="/filter" />
          <Route element={<FilterResultsComponent />} path="/filter-results" />
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
        <MailingListComponent />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;