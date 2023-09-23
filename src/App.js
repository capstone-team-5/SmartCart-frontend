//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { applyTheme, setTheme } from "./Theme";
import axios from "axios";

//Commons
import Header from "./Commons/Header";
import Navbar from "./Commons/Navbar";
import Footer from "./Commons/Footer";

//Pages
import AboutUs from "./Pages/AboutUs";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
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
import LandingPage from "./Pages/LandingPage";
import Favorites from "./Pages/Favorites";
import Savings from "./Pages/Savings";
import WhereDidYouShop from "./Pages/WhereDidYouShop";

// Components
import CustomerTestimonialsComponent from "./NonMVPComponents/CustomerTestimonialsComponent";
import FeedbackComponent from "./NonMVPComponents/FeedBackComponent";
import FaqComponent from "./NonMVPComponents/FaqComponent";
import ChangePasswordComponent from "./NonMVPComponents/ChangePasswordComponent";
import ForgotPasswordComponent from "./NonMVPComponents/ForgotPasswordComponent";
import LocationComponent from "./Commons/LocationComponent";

// Styling
import "./App.css";

function App() {
  const [cart, setCart] = useState(() => {
    const storedCartData = JSON.parse(
      window.localStorage.getItem("Testing_Cart")
    );
    return Array.isArray(storedCartData) ? storedCartData : [];
  });

  const [cartLength, setCartLength] = useState(() => {
    const storedCartLength = parseInt(
      window.localStorage.getItem("Testing_Cart_Length")
    );
    return isNaN(storedCartLength) ? 0 : storedCartLength;
  });

  const [loading, setLoading] = useState("Finding Shops In Your Area");
  const [stores, setStores] = useState([]);
  const [comparison, setComparison] = useState({});
  const [showDrumRoll, setShowDrumRoll] = useState(false);
  const [storeTotalPrices, setStoreTotalPrices] = useState({});
  const [sortedStores, setSortedStores] = useState([]);

  useEffect(() => {
    const newStoreTotalPrices = {};

    stores.forEach((store) => {
      if (comparison.hasOwnProperty(store.store_id)) {
        const storeTotalPrice = cart.reduce((total, item) => {
          const itemPrice = Number(comparison[store.store_id][item.id]);
          const itemQuantity = item.length || 0;

          if (Number(itemPrice) && Number(itemQuantity)) {
            return total + itemPrice * itemQuantity;
          }

          return total;
        }, 0);

        newStoreTotalPrices[store.store_id] = storeTotalPrice;
      }
    });

    setStoreTotalPrices(newStoreTotalPrices);
  }, [cart, comparison, stores]);

  const filtedStores = stores
    .filter((store) => comparison.hasOwnProperty(store.store_id))
    .sort(
      (a, b) => storeTotalPrices[a.store_id] - storeTotalPrices[b.store_id]
    );

  useEffect(() => {
    const cartIds = cart.map((food) => food.id);
    const convertIdsToString = cartIds.join(",");
    const backendEndPoint = `${process.env.REACT_APP_BACKEND_API}/compare-prices?productIds=${convertIdsToString}`;

    axios
      .get(backendEndPoint)
      .then((response) => {
        setComparison(response.data.stores);
        setTimeout(() => {
          setLoading("Calculating Your Savings");
        }, 1500);

        setTimeout(() => {
          setLoading("Drum Roll !!!!");
          setShowDrumRoll(true);
        }, 5000);

        setTimeout(() => {
          setLoading(false);
        }, 7500);
      })
      .catch((error) => {
        console.error("Error fetching comparison data:", error);
        setLoading(false);
      });
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem("Testing_Cart_Length", cartLength.toString());
  }, [cartLength]);

  useEffect(() => {
    applyTheme();

    const storedCartLength = parseInt(
      window.localStorage.getItem("Testing_Cart_Length")
    );
    if (!isNaN(storedCartLength)) {
      setCartLength(storedCartLength);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Testing_Cart_Length", cartLength.toString());
  }, [cartLength]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/stores`)
      .then((response) => {
        setStores(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stores:", error);
      });
  }, []);

  const handleThemeChange = (theme) => {
    setTheme(theme);
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
    window.localStorage.setItem("Testing_Cart", JSON.stringify(updatedCart));
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
      window.localStorage.setItem("Testing_Cart", JSON.stringify(updatedCart));
      setCartLength(totalQuantity);
    }
  };

  const handleClearCart = () => {
    if (
      window.confirm(
        "This Will Delete Your Entire Cart. This Action CANNOT Be Undone!"
      )
    ) {
      setCart([]);
      setCartLength(0);
      window.localStorage.removeItem("Testing_Cart");
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          cartLength={cartLength}
          handleThemeChange={handleThemeChange}
          updateCartLength={setCartLength}
        />
        <LocationComponent />
        <Header addToCart={handleAddToCart} />
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<Home addToCart={handleAddToCart} />} path="/home" />
          <Route
            element={
              <TestComponent
                updateCartLength={setCartLength}
                cartLength={cartLength}
                cart={cart}
                addToCart={handleAddToCart}
              />
            }
            path="/test"
          />
          <Route element={<Savings />} path="/user/:id/savings" />
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
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<User />} path="/user/:id" />
          <Route
            element={<SearchResults addToCart={handleAddToCart} />}
            path="/search-results/:query"
          />
          <Route
            element={
              <PriceComparison
                cart={cart}
                stores={stores}
                comparison={comparison}
                loading={loading}
                showDrumRoll={showDrumRoll}
                sortedStores={filtedStores}
              />
            }
            path="/price-compare"
          />
          <Route element={<UserCart />} path="/user/:id/cart" />
          <Route element={<Favorites />} path="/favorites" />
          {/* the route for favorites will become '/user/favorite/:id' */}
          <Route element={<UserEdit />} path="/user/:id/edit" />
          <Route element={<Subscription />} path="/user/:id/subscription" />
          <Route
            element={<ConfirmSubscription />}
            path="/user/:id/subscription/confirmed"
          />
          <Route element={<MeetTheDevelopers />} path="/meet-the-developers" />
          <Route
            element={<CustomerTestimonialsComponent />}
            path="/testimonials"
          />
          <Route element={<FaqComponent />} path="/faq" />
          <Route element={<FeedbackComponent />} path="/feedback" />
          <Route
            element={<ChangePasswordComponent />}
            path="/change-password"
          />
          <Route
            element={<ForgotPasswordComponent />}
            path="/forgot-password"
          />
          <Route
            element={
              <WhereDidYouShop
                comparison={comparison}
                sortedStores={filtedStores}
              />
            }
            path="/user/:id/where-did-you-shop"
          />
          <Route element={<FourOFour />} path="/*" />
        </Routes>
        <Footer handleThemeChange={handleThemeChange} />
      </BrowserRouter>
    </div>
  );
}

export default App;