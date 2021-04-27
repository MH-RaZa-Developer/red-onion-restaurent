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

export const foodContext = createContext();

function App() {

  const [foodItem, setFoodItem] = useState([]);

  return (
    <foodContext.Provider value={[foodItem, setFoodItem]}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path='/details/:id'>
                  <Details></Details>
                </Route>
            </Switch>
        </Router>
    </foodContext.Provider>
  );
}

export default App;
