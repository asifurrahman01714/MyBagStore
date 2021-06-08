import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Screen/Components/Home/Home';
import Header from './Screen/Components/Header/Header';
import Cart from "./Screen/Components/Cart/Cart";
import SingleProduct from "./Screen/Components/SingleProduct/SingleProduct";

export const IdContext = createContext()
function App() {
  const [productId, setProductId] = useState(0)
  return (
    <IdContext.Provider value={[productId, setProductId]}>
      <div className="">
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path='/'>


              <Home ></Home>
            </Route>
            <Route path='/carts'>
              <Cart></Cart>

            </Route>
            <Route path='/product'>
              <SingleProduct />

            </Route>
          </Switch>
        </Router>


      </div>
    </IdContext.Provider>
  );
}

export default App;
