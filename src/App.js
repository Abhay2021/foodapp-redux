import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';
import './App.css';



function App() {
  return (
    <div >
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/foodapp-redux/" exact component={Products} />
            <Route path="/foodapp-redux/cart" exact component={Cart} />
            <Route  component={PageNotFound} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
