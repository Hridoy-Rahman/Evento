import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div >
            
            <div className="flex justify-center">
                <div className=" bg-sky-50 rounded-xl w-2/3 p-2">
                    <button onClick={handleGoogleSignIn} className="flex items-center text-blue-700 gap-2">
                        <FaGoogle></FaGoogle> Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoogleLogin;