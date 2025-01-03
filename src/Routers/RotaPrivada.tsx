import { Navigate, useLocation } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { RootState } from '../store/modules/rootReducer';

interface MyRouteProps {
    children: ReactNode | (() => ReactNode);
    isClosed?: boolean;
    requiredPermission: string;
}

interface LocationState {
    prevPath: string;
}

export interface Decoded {
    id: string;
    name: string;
    permission: string;
    exp: number;
    iat: number;
}

const PrivateRoute: React.FC<MyRouteProps> = ({ children, isClosed = false, requiredPermission }) => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const token = useSelector((state: RootState) => state.auth.token);

    if (token === null) {
        return <Navigate to="/login" />;
    }

    const decoded: Decoded = jwtDecode(token);

    const userPermission = decoded.permission;

    const location = useLocation();

    if (isClosed && !isLoggedIn) {
        return <Navigate to="/redirect" state={{ prevPath: location.pathname } as LocationState} />;
    }

    if (requiredPermission && userPermission !== requiredPermission) {
        return <Navigate to="/unauthorized" state={{ prevPath: location.pathname } as LocationState} />;
    }

    const renderedChildren = typeof children === 'function' ? (children as () => ReactNode)() : children;

    return isLoggedIn ? <>{renderedChildren}</> : <Navigate to="/login" />;
};
export default PrivateRoute;