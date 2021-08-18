import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPages";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import OrderPage from "./pages/OrderPage";
const App = () => {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Header />
          <main className="py-3">
            <Container>
              <h1>Welcome To Cash & Delivery</h1>
              <Route path="/shipping" component={ShippingPage} />
              <Route path="/payment" component={PaymentPage} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route path="/order/:id" component={OrderPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/product/:id" component={ProductPage} />
              <Route path="/cart/:id?" component={CartPage} />
              <Route path="/" component={HomePage} exact />
            </Container>
          </main>
          <Footer />
        </Router>
      </React.Fragment>
    </div>
  );
};

export default App;
