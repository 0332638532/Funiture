import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./views/HomePage";
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import AllProduct from "./views/AllProduct";
import DetailProduct from "./views/DetailProduct";
import AllNew from "./views/AllNew";
import Detailnew from "./views/Detailnew";
import Intro from "./views/Intro";
import Contact from "./views/Contact";
import CartProducts from "./views/CartProducts";
import ProductsSearch from "./views/ProductsSearch";
import ShipmentDetail from "./views/ShipmentDetail";
import Payment from "./views/Payment";
import Order from "./views/Order";
import PayMentSuccess from "./views/PayMentSuccess";
import PrivateRouter from "./PrivateRouter";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/page/:pagenumber" component={HomePage} exact />
            <Route path="/search/:keyword" component={ProductsSearch} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={ProductsSearch}
              exact
            />
            <Route path="/products/:id" component={DetailProduct} />
            <Route path="/all/products" component={AllProduct} exact />
            <Route
              path="/all/products/page/:pagenumber"
              component={AllProduct}
            />
            <Route path="/all/news" component={AllNew} />
            <Route path="/news/:id" component={Detailnew} />
            <Route path="/intro" component={Intro} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRouter path="/profile" component={Profile} />
            <Route path="/cart/:id?" component={CartProducts} />
            <PrivateRouter path="/shipping" component={ShipmentDetail} />
            <PrivateRouter path="/payment" component={Payment} exact />
            <PrivateRouter path="/order/:id" component={Order} />
            <Route path="/payment/success" component={PayMentSuccess} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
