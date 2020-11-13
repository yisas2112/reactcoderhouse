import React from 'react';  

const Item = ({props}) =>{    
    const number = props.products.id;
    return (
        <>         
             <div className="col-3" key={number}>
                        <div className="card card-cascade card-ecommerce m-3">
                            {/* Card Image */}
                            <div className="view view-cascade overlay">                                
                                <img className="card-img-top" src={props.products.img}></img>
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/* Card Content */}                            
                            <div className="card-body card-body-cascade text-center">   
                                <h5>{props.products.Model} - {props.products.year}</h5>
                                <button type="button" className="btn btn-primary">Comprar</button>
                            </div>
                            {/* Card Footer */}                            
                            <div className="card-footer m-auto w-100">
                                <span>{props.products.Price}</span>                                                                
                            </div>                            
                        </div>
                    </div>
        </>
    )
}


export default Item;