import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../services/authService'; // Adjust the import based on your auth service

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        setUser(userCredential.user);
    };

    const register = async (email, password) => {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        setUser(userCredential.user);
    };

    const logout = async () => {
        await auth.signOut();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };