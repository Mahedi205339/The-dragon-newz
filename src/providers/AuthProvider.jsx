import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from "../firebase/firebase.config";
import { useEffect } from "react";
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const auth = getAuth(app)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the current state change', currentUser)
            setUser(currentUser)
        });
        return () => { unsubscribe() }


    }, [])


    const authInfo = {
        user,
        createUser,
        logOut,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;