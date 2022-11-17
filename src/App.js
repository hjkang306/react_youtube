import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HeaderCont, MainConts, VideoConts, ChennelConts, SearchConts } from './components'

const App = () => {
  return (
    <BrowserRouter>
    <HeaderCont />
      <Routes>
        <Route path="/" element={<MainConts />}></Route>
        <Route path="/video/:id" element={<VideoConts />}></Route>
        <Route path="/channel/:id" element={<ChennelConts />}></Route>
        <Route path="/search/:searchKeyword" element={<SearchConts />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
