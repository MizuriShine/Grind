import React from 'react';
import { useAppSelector } from '../store/hooks';

const Home: React.FC = () => {
    const auth = useAppSelector((state) => state.auth);

    return (
        <div>
            <h1>Welcome to Grind!</h1>
            {/* {auth.isAuthenticated && auth.user ? (
                <p>Logged in as: {auth.user.email}</p>
            ) : (
                <p>Please log in.</p>
            )} */}
            {auth.isAuthenticated ? (
                <p>Logged in!</p>
            ) : (
                <p>Please log in.</p>
            )}
        </div>
    );
};

export default Home;