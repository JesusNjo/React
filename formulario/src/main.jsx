import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HocksApp } from './HocksApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HocksApp name={'Aplicación de hooks'}/>
  </React.StrictMode>,
)
