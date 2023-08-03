import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs  } from 'firebase/firestore';

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

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const provider = new GoogleAuthProvider();

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

    const handleCreateNewListing = async (name, isbn, price, cover) => {
        const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`)
        const uploadResult = await uploadBytes(imageRef, cover);
        return await addDoc(collection(firestore, 'books'), {
            name,
            desc,
            isbn,
            price,
            imageURL: uploadResult.ref.fullPath,
        })
    }


    const listAllBooks = () => {
        return getDocs(collection(firestore, 'books'));
    }

    const getImageURL = (path) => {
        return getDownloadURL(ref(storage, path));
    }

    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider value={{ singUpUserWithEmailAndPassword, signInUserWithEmailAndPassword, signInWithGoogle, isLoggedIn, handleCreateNewListing, listAllBooks, getImageURL }}>{props.children}</FirebaseContext.Provider>
    )
}