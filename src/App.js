import React from 'react';
import BarraNav from './components/Menu/Navbar';
import Home from './containers/Home/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemDetail from './components/Productos/ItemDetailContainer';
import Cart from './components/Carrrito/Cart';
import './App.css';
import { AppFirebase, AppProvider, CartContext} from './components/AppContext/AppContext';
import {EjercicioFirebase} from './firebase/firebase'


function App() {
  return (
    <>    
    <AppFirebase>
    <AppProvider>
    <CartContext>
    <BrowserRouter>
    <BarraNav/>
    <Switch>
      <Route exact path='/'>
      <Home greetings="E-commerce"/>
      </Route>
      <Route exact path='/detalle/:parametro'>
        <ItemDetail/>
      </Route>           
      <Route exact path="/carrito">
        <Cart/>
      </Route>
      <Route exact path='/firebase'>
        <EjercicioFirebase/>
      </Route>    
    </Switch>
    </BrowserRouter>    
    </CartContext>
    </AppProvider>       
    </AppFirebase>
    
    </>
  );
}

export default App;


