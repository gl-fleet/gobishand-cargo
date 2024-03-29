import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './home'
import NotFound from './NotFound'

const low = document.documentElement.clientWidth < 768 ? '0.75' : '1'
const meta = document.createElement('meta')
meta.name = "viewport"
meta.content = `width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=${low}, minimum-scale=${low}`
document.getElementsByTagName('head')[0].appendChild(meta)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()