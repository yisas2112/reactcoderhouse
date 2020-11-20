import React from 'react';
import BarraNav from './components/Menu/Navbar';
import Home from './containers/Home/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemDetail from './components/Productos/ItemDetailContainer';
import './App.css';



function App() {
  return (
    <>
    <BrowserRouter>
    <BarraNav/>
    <Switch>
      <Route exact path='/'>
      <Home greetings="E-commerce"/>
      </Route>
      <Route exact path='/detalle/:parametro'>
        <ItemDetail/>
      </Route>           
    </Switch>
    </BrowserRouter>
    
    
    
    
    </>
  );
}

export default App;


