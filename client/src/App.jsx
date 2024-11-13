import axios from "axios"
import React from 'react'
import Navbar from "./component/Navbar"

function App() {

  const handleSubmit =async (e) =>{
    e.preventDefault()

    let res = await axios.post("https://paypal-integration-api.vercel.app")
    console.log(res)

    if(res && res.data){
      let link = res.data.links[1].href
      window.location.href = link;
    } 
  }

  return (
    <div >
    <Navbar/>
    <button onClick={handleSubmit}>
      buy now
    </button>
    </div>
      
    
  )
}

export default App
