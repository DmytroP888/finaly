import React from "react"
import { Routes, Route } from "react-router-dom"

import { Layout } from './components/Layout'

import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import DiaryPage from './pages/DiaryPage'
import CalculatorPage from './pages/CalculatorPage'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="auth" element={<RegistrationPage />} />
                <Route path="diary" element={<DiaryPage />} />
                <Route path="calculator" element={<CalculatorPage />} />
                <Route path="*" element={<MainPage />} />
            </Route>
        </Routes>
    )
}

export default Router