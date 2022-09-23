import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
    return (
        <>
            <Header />

            <Outlet />

            {/* <footer className="container">2021</footer> */}
        </>
    )
}

export { Layout }