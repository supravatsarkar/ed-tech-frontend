import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect } from "react";
import firebaseAuthentication from "../Firebase/firebase.init";

firebaseAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const handleEmailField = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordField = (e) => {
        const value = e.target.value;
        if (value.length < 6) {
            setError('Password should be at least 6 characters..');
            console.log(e.target.value);
            return;
        }
        setPassword(e.target.value);
        setError('');
    }
    //register using email and password
    const registerUsingEmailPassword = (e) => {
        // e.preventDefault();
        if (!(email && password)) {
            return setError('Email or Password may be empty. Please enter carefully');
        }
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // sign in using email and password 
    const logInUsingEmailPassword = (e) => {
        // e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password)

    }

    //password reset email
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                alert('Password reset email sent!')
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // google sign in 
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }

    // Log Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sign-out successful');
                // Sign-out successful.
            }).catch((error) => {
                console.log('Sign-out error-', error.message);
                // An error happened.
            });
    }

    // Observe current login user
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser({});
                setLoading(false);
            }
        })
    }, [])
    // console.log('IsLoading from hook-', setLoading);
    return {
        signInUsingGoogle,
        logOut,
        user,
        handleEmailField,
        handlePasswordField,
        registerUsingEmailPassword,
        logInUsingEmailPassword,
        resetPassword,
        error,
        setError,
        loading,
    }
}
export default useFirebase;