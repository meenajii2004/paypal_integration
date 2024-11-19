import axios from "axios"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from 'react'
import Navbar from "./component/Navbar"
import Body from "./component/Body"
import Success from "./page/Succes1"
import Failed from "./page/Failed1"



function App() {

  const handleSubmit = async (e) => {
    e.preventDefault()

    let res = await axios.post("https://paypal-integration-api.vercel.app/payment")
    console.log(res)

    if (res && res.data) {
      let link = res.data.links[1].href
      window.location.href = link;
    }
  }

  // const homepage = async (e) =>{

  // }
  return (
    <div >
      <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<button onClick={handleSubmit}>Buy Now</button>} />
      <Route path="/success" element={<Success />} />
      <Route path="/failed" element={<Failed  />} />
      </Routes>
      </Router>

        {/* <Body/> */}
    </div>


  )
}

export default App
