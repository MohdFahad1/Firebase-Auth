import React, { useState, useEffect } from 'react';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const firebase = useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await firebase.signInUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        if(firebase.isLoggedIn){
            navigate("/");
        }
    }, [firebase, navigate])

    return (
        <div className=" h-[100vh] flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold underline capitalize text-center">Log in</h1>
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Log In
                        </button>
                    </div>
                </form>
                <h1 className="text-center my-5">OR</h1>
                <button type="button" className="bg-[#D52D28] hover:bg-red-700 duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" onClick={firebase.signInWithGoogle}>
                    Log In With Google
                </button>
            </div>
        </div>
    )
}

export default Register