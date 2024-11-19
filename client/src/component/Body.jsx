import React from 'react'
import backgroundImage from './ui/HomePage.png';


export default function Body() {


    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`, 
            height: "100vh", 
            backgroundSize: "cover",
            backgroundPosition: "center", 
        }}>

        </div> 
    )
}
