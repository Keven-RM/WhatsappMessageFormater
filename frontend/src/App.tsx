import React, { useState } from 'react'
import { List } from './types';

//pages
import Home from './pages/Home'
import Chat from './pages/Chat'

//style
import './styles/App-styles.css'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Image } from './pages/page';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/chat" element={<Chat />}/>
          <Route path="/image" element={<Image />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
