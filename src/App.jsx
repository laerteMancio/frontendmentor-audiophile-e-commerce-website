import './App.css'

import Header from "./components/Header"
import Layout from "./components/Layout"
import Footer from "./components/Footer"

function App() {  

  return (
    <div className='container-geral'>
      <div className='header'><Header /></div>
      <div className='layout'><Layout /></div>
      
    </div>
  )
}

export default App
