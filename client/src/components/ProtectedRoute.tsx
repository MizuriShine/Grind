import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const auth = useAppSelector((state) => state.auth);

    if (!auth.isAuthenticated) {
        return <Navigate to="/login"/>;
    }

    return children;
};

export default ProtectedRoute;