// auth context
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

// context initialization
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const firebaseData = useFirebase();

    return (
        <AuthContext.Provider value={firebaseData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;