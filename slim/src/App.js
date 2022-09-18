import React from "react"

import GlobalFonts from './assets/fonts/fonts'
import GlobalStylesReset from './assets/reset'
import Router from './Router'

import MainPage from "./pages/MainPage"

function App() {
  return (
    <div>
      <GlobalFonts />
      <GlobalStylesReset />

      <MainPage />
      <Router></Router>
    </div>
  )
}

export default App
