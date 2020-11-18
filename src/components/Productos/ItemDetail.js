import React, {useEffect, useState} from 'react';
import Data from './productos.json';

const ItemDetail = ({producto})=>{
    const [product, setProduct] = useState();    

    useEffect(()=>{

        setProduct(producto);

    });

    

    return <>
        <div>{product}</div>
    </>

}

export default ItemDetail;