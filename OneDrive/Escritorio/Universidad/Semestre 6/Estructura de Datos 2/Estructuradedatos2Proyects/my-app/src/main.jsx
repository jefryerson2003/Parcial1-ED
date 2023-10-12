import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FirstApp from './FirstApp.jsx'

//function App() {
//  return <h1>   Hello World  </h1>
//}

// cuando una funcion retorne un html esta va a ser un component
// para invocar dichos component se invoca como una etiqueta html (<App />)

//[Challenge 1]
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp />
  </React.StrictMode>,
)


