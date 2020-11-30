import React from 'react';
import ItemList from '../../components/Productos/ItemList';
import {useEffect} from 'react'

const Home = ({greetings}) => {    

    // const mostrarAlert= ()=>{
    //     console.log('Me tocaste');
    // }

    // const noVocales= (evt)=>{
    //     if(evt.code === 'KeyA' || evt.code === 'KeyE'|| evt.code === 'KeyI' || evt.code === 'KeyO' || evt.code === 'KeyU'){
    //         evt.preventDefault();
    //     }else{
    //         console.log(evt);
    //     }


    // }


    // useEffect(()=>{
    //     //El componente se montó
    //     window.addEventListener('click', mostrarAlert );

    //     return ()=>{
    //         //El componente se está por morir
    //         window.removeEventListener('click', mostrarAlert)
    //     }
    // })

    //El componente se está por montar
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