import React from 'react';
//import Contador from '../../components/ItemCount';
//import Tast from '../../components/prueba';
import ItemList from '../../components/Productos/ItemList';

const Home = ({greetings}) => {

    const ShowCant = (value)=>{
        console.log(value);
    }
    return(
        <>
            <h1 className="h1 text-center">{greetings}</h1>
            {/* <Contador initialValue={0} max={20} min={0} onaDD={ShowCant}/> */}
            <ItemList/>
            
        </>
    )
}
export default Home;