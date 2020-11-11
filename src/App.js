import React from 'react';
import BarraNav from './components/Menu/Navbar';
import Home from './containers/Home/Home';

//import $ from 'jquery';
//import Popper from 'popper.js';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <>
    <BarraNav/>,
    <Home greetings="Bienvenido!"/>
    
    
    </>
  );
}

export default App;


