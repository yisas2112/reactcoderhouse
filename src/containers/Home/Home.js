import React from 'react';
import ItemList from '../../components/Productos/ItemList';

const Home = ({greetings}) => {        
   
    return(
        <>
            {/* <button onClick={mostrarAlert}>Tocame</button>
            <input onKeyDown={noVocales} placeholder="escribe"></input> */}
            <h1 className="h1 text-center">{greetings}</h1>            
            <ItemList/>            
        </>
    )
}
export default Home;