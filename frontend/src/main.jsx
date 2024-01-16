import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './reset.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import { store } from "./redux/store/store.js"
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider  router={router} >
 <App />

 </RouterProvider>
  </Provider>,
 
  </React.StrictMode>,
)
