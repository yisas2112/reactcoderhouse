import React from 'react';
import BarraNav from './components/Menu/Navbar';
import Home from './containers/Home/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemDetail from './components/Productos/ItemDetailContainer';
import Cart from './components/Carrrito/Cart';
import './App.css';
import {AppProvider, CartContext} from './components/AppContext/AppContext';
import ItemListDesc from './components/Productos/itemListDesc/ItemListDesc';
import ItemListAsc from './components/Productos/ItemListAsc';
import Venta from './components/Venta';




function App() {
  return (
    <>        
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
      <Route exact path='/desc'>
      <ItemListDesc/>
      </Route>      
      <Route exact path='/asc'>
        <ItemListAsc/>
      </Route>
      <Route exact path='/formulario'>
        <Venta/>
      </Route>
    </Switch>
    </BrowserRouter>    
    </CartContext>
    </AppProvider>       
    </>
  );
}

export default App;


