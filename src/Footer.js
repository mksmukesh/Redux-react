import React from'react'
import { GlobalInfo } from './App';
import { useContext } from 'react';
const Footer =()=>{

    const {appColor}=useContext(GlobalInfo)
    return(
        <footer>
            <h1 style={{color:appColor}}>
                I am footer
            </h1>
        </footer>
    )
}
export default Footer;
