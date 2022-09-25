import { useLocation, Navigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    // const { user: authUser } = useSelector(x => x.auth); 
    const userData = true

    if (!userData) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children
}

export default PrivateRoute