import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";


const FirebaseContext = createContext(null);


const firebaseConfig = {
    apiKey: "AIzaSyDYShj694MIIGZpbTyRQXNL-tkJqQRrm-4",
    authDomain: "app-10526.firebaseapp.com",
    databaseURL: "https://app-10526-default-rtdb.firebaseio.com",
    projectId: "app-10526",
    storageBucket: "app-10526.appspot.com",
    messagingSenderId: "772843975710",
    appId: "1:772843975710:web:f1ab0625104f8044dd6a0f"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if(user){
                setUser(user)
            }
            else{
                setUser(null);
            }
        })
    }, [])

    const singUpUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password).then((value) => alert("User Created")).catch((error) => console.log("Error", error));
    }

    const signInUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password).then((value) => console.log("User Log In Values", value)).catch((error) => console.log(error));
    }

    const signInWithGoogle = () => {
        return signInWithPopup(firebaseAuth, provider).then((result) => console.log(result)).catch((error) => console.log(error));
    }

    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider value={{ singUpUserWithEmailAndPassword, signInUserWithEmailAndPassword, signInWithGoogle, isLoggedIn }}>{props.children}</FirebaseContext.Provider>
    )
}