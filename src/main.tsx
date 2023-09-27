import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import Slider from './Slider.tsx'
//import Slider from './Slider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
    <App />
    <Slider />
    </>
  </React.StrictMode>,
)
