import react, { useContext, useState } from 'react'
import Spinner  from '../components/spinner/spinner'
import { AppContext3 } from '../components/AppContext/AppContext'


export const EjercicioFirebase = ()=>{
    const valoresFirebase = useContext(AppContext3)
    console.log(valoresFirebase.precioAlto)

    

    return <>
    {
        valoresFirebase ? 
        valoresFirebase.items.map((e)=>{
        return <p>{e.model}</p>
        })
        : <Spinner/>
    }</>
}


