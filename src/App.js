//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


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
import TestComponent from "./MVPComponents/TestComponent";
import IndividualProduct from "./Pages/IndividualProduct";
import ContactUs from "./Pages/ContactUs";

//Components
import FilterButtonComponent from "./MVPComponents/FilterButtonComponent";
import FilterResultsComponent from "./MVPComponents/FilterResultsComponent";

function App() {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  const updateCartLength = (length) => {
    setCartLength(length);
  };

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
    console.log('update:', updatedCart)
    setCartLength((previousCartLength) => previousCartLength + 1);
    updateCartLength(updateCartLength)
  };


  const handleDeleteItem = (id) => {
    setCart(cart.filter((food) => food.product_id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
    setCartLength('')
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartLength={cartLength} />
        <Header addToCart={handleAddToCart} />
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
                deleteItem={handleDeleteItem}
                clearCart={handleClearCart}
                cart={cart}
                cartLength={cartLength}
                updateCartLength={updateCartLength}
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