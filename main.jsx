import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Buku from './Components/Buku.jsx'
import IndukBuku from './induk-buku.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <IndukBuku/>
  </React.StrictMode>
)
