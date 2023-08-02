import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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


export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const singUpUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password).then((value) => alert("User Created")).catch((error) => console.log("Error", error));
    }

    return (
        <FirebaseContext.Provider value={{ singUpUserWithEmailAndPassword }}>{props.children}</FirebaseContext.Provider>
    )
}