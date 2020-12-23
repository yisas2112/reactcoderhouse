import React from 'react'
import './Footer.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () =>{
    return <>
            <div id='Footer' className="text-right bg-primary fixed-bottom d-flex align-items-center" >                
                <div className='ml-auto mr-3 '>
                    <div className=" text-white ">                                                                                                            
                        <span>Powered by</span>
                        <span> &copy; 2020 JRCommunityManager</span>
                    </div>
                </div>
            </div>  
    
    </>
}

export default Footer