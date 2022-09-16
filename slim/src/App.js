import React from "react"

import GlobalFonts from './assets/fonts/fonts'
import GlobalStylesReset from './assets/reset'
import Router from './Router'

// import Header from "./components/Header";
import MainPage from "./pages/MainPage"

function App() {
  return (
    <div>
      <GlobalFonts />
      <GlobalStylesReset />

      {/* <Header /> */}
      <MainPage />
      <Router></Router>
    </div>
  )
}

export default App
