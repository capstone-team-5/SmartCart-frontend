//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { applyTheme, setTheme } from "./Theme";

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
import IndividualProduct from "./Pages/IndividualProduct";
import ContactUs from "./Pages/ContactUs";
import SearchResults from "./Pages/SearchResults";
import PriceComparison from "./Pages/PriceComparison";
import FilterResults from "./Pages/FilterResults";
import LandingPage from "./Pages/LandingPage";
import CategoryPage from "./Pages/CategoryPage";
import Filter from "./Pages/Filter";

// Components

import CustomerTestimonialsComponent from "./NonMVPComponents/CustomerTestimonialsComponent";
import FaqComponent from "./NonMVPComponents/FaqComponent";

function App() {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [appTheme, setAppTheme] = useState("dark");

  useEffect(() => {
    applyTheme();
  }, []);

  const handleThemeChange = (theme) => {
    setTheme(theme);
    setAppTheme(theme);
    applyTheme();
  };

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
    console.log("updatedCart:", updatedCart);
    setCart(updatedCart);
    setCartLength((previousCartLength) => previousCartLength + 1);
    updateCartLength(updateCartLength);
  };

  const [itemQuantities, setItemQuantities] = useState(
    cart.reduce((quantities, item) => {
      quantities[item.id] = item.length;
      return quantities;
    }, {})
  );

  const handleQuantityChange = (itemId, quantity) => {
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[itemId] = quantity;
    setItemQuantities(updatedQuantities);

    const cartAdjustedLength = Object.values(updatedQuantities).reduce(
      (total, itemLength) => total + itemLength,
      0
    );

    setCartLength(cartAdjustedLength);
  };

  const handleDeleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedCart = cart.filter((item) => item.id !== id);
      const totalQuantity = updatedCart.reduce(
        (total, item) => total + item.length,
        0
      );
      setCart(updatedCart);
      setCartLength(totalQuantity);
    }
  };

  const handleClearCart = () => {
    setCart([]);
    setCartLength(0);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          cartLength={cartLength}
          theme={appTheme}
          handleThemeChange={handleThemeChange}
        />
        <Header addToCart={handleAddToCart} />
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Home addToCart={handleAddToCart} />} path="/home" />
          <Route element={<TestComponent cart={cart} />} path="/test" />
          <Route element={<AboutUs />} path="/about-us" />
          <Route element={<ContactUs />} path="/contact-us" />
          <Route
            element={
              <IndividualProduct
                handleAddToCart={handleAddToCart}
                cartLength={cartLength}
              />
            }
            path="/product/:id"
          />
          <Route
            element={<FilterResults addToCart={handleAddToCart} />}
            path="/filter-results"
          />
          <Route
            element={
              <Cart
                deleteItem={handleDeleteItem}
                clearCart={handleClearCart}
                cart={cart}
                cartLength={cartLength}
                updateCartLength={updateCartLength}
                handleQuantityChange={handleQuantityChange}
              />
            }
            path="/cart"
          />
          <Route element={<Location />} path="/location" />
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<User />} path="/user:id" />
          <Route
            element={<SearchResults addToCart={handleAddToCart} />}
            path="/search-results/:query"
          />
          <Route
            element={<PriceComparison cart={cart} />}
            path="/price-compare"
          />
          <Route element={<UserCart />} path="/user/:id/cart" />
          <Route element={<UserEdit />} path="/user/:id/edit" />
          <Route element={<Subscription />} path="/user/:id/subscription" />
          <Route
            element={<ConfirmSubscription />}
            path="/user/:id/subscription/confirmed"
          />
          <Route element={<MeetTheDevelopers />} path="/meet-the-developers" />
          <Route element={<CategoryPage />} path="/categories" />
          <Route
            element={<Filter addToCart={handleAddToCart} />}
            path="/filter"
          />
          <Route
            element={<CustomerTestimonialsComponent />}
            path="/testimonials"
          />
          <Route
            element={<FaqComponent />}
            path="/faq"
          />
          <Route element={<FourOFour />} path="/*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
