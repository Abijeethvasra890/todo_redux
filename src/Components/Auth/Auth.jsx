import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, googleProvider } from '../../Firebase/firebase_config';
import Navbar from '../Navbar/Navbar';

export const handleSignOut = async() => {
    try{
        await signOut(auth);
        alert("User Signed Out");
    }catch(err){
        alert(err);
    }
}

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(auth?.currentUser?.email);

    const handleSignIn = async() =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            alert("User Signed In");
        }catch(err){
            alert(err);
        }
        
    }

    const handleSignInGoogle = async() =>{
        try{
            await signInWithPopup(auth, googleProvider);
            alert("User Signed In");
        }catch(err){
            alert(err);
        }
    }

   

  return (
    <>
    <Navbar />
    <div className='flex items-center justify-center'>
        <div className='flex flex-col justify-center items-center'> 
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
            <input
                className="py-3 px-4 w-9/12 md:w-80 border-2 border-gray-200 rounded-lg text-md mb-3"
                type='text'
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
                className="py-3 px-4 w-9/12 md:w-80 border-2 border-gray-200 rounded-lg text-md mb-5" 
                type='password'
                placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}
            />
            <div className='flex'> 
                <button 
                    className="bg-black hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded w-56 mb-3 mr-3"
                    onClick={handleSignIn}>Sign In</button>
                <button 
                    className="bg-black hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded w-56 mb-3"
                    onClick={handleSignInGoogle}>Sign In with Google</button>
            </div>
            
            
        </div>
    </div>
    </>
  )
}

export default Auth