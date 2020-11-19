import React from 'react';


const ItemDetail = ({product})=>{
    console.log(product);   

    return <div className="col-3">
            <div className="card card-cascade card-ecommerce m-3">
                {/* Card Image */}
                <div className="view view-cascade overlay">                                
                <img className="card-img-top" src={product.img}></img>
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                {/* Card Content */}                            
                <div className="card-body card-body-cascade text-center">   
                    <h5>{product.Model} - {product.year}</h5>
                    <button type="button" className="btn btn-primary">Comprar</button>
                </div>
                {/* Card Footer */}
                
                <div className="card-footer m-auto w-100">
                    <span>{product.Price}</span>                                                                
                </div>                            
            </div>
        </div>

}


export default ItemDetail;