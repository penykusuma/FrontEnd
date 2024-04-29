import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Buku from './Components/Buku.jsx'
import IndukBuku from './induk-buku.jsx'
import Navbar from './Components/Navbar.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Layout from './Components/Layout.jsx'
import Home from './Pages/Home.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <IndukBuku/> */}
    {/* <Navbar/>
    <Sidebar/> */}
    {/* <Layout/> 
   */}
     {/* <Home />  */}

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
