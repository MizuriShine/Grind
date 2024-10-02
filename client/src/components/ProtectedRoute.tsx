import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { checkAuth } from '../store/slices/authSlice';

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const auth = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!auth.isAuthenticated) {
            let authState = checkAuth();
            console.log(authState);
            dispatch(authState);
        }
    }, [auth.isAuthenticated, dispatch]);

    if (!auth.isAuthenticated) {
        return <Navigate to="/login"/>
    }

    return children;
};

export default ProtectedRoute;