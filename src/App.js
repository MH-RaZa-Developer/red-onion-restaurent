import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import { createContext } from 'react';
import { useState } from 'react';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipment from './components/Shipment/Shipment';
import SignIn from './components/SignIn/SignIn';

export const foodContext = createContext();

function App() {

  const [foodItem, setFoodItem] = useState([]);
  const [LoggedInUser, setLoggedInUser] = useState({});
  const [address, setAddress] = useState({});

  return (
    <foodContext.Provider value={{foodOrder: [foodItem, setFoodItem], log: [LoggedInUser, setLoggedInUser], add: [address, setAddress]}}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path='/details/:id'>
                  <Details />
                </Route>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <PrivateRoute path="/shipment">
                    <Shipment />
                </PrivateRoute>
                <Route path="/signIn">
                    <SignIn />
                </Route>
            </Switch>
        </Router>
    </foodContext.Provider>
  );
}

export default App;
