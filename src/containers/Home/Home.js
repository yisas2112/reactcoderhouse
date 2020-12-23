import React from 'react';
import Footer from '../../components/Footer';
import ItemList from '../../components/Productos/ItemList';

const Home = ({greetings}) => {        
   
    return(
        <> 
            <h1 className="h1 text-center">{greetings}</h1>            
            <div className='mb-5'>
            <ItemList/>    
            </div>
            <Footer/>
        </>
    )
}
export default Home;